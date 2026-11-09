"""Upload the static preview without printing signed URLs."""
from pathlib import Path
import json
import subprocess

root = Path(__file__).resolve().parents[1]
base = ['aws', 'amplify']
common = ['--app-id', 'd3hxbg02ceyurf', '--branch-name', 'two-d-premium', '--region', 'us-west-1', '--output', 'json']

def call(args):
    result = subprocess.run(args, capture_output=True, text=True)
    if result.returncode:
        raise RuntimeError(result.stderr)
    return json.loads(result.stdout) if result.stdout.strip() else {}

bucket = 'videoanimation.twod.deploy.529088278614'
key = 'staging/2d-service-v3.zip'
try:
    call(['aws', 's3api', 'head-bucket', '--bucket', bucket, '--region', 'us-west-1'])
except RuntimeError:
    call(['aws', 's3api', 'create-bucket', '--bucket', bucket, '--region', 'us-west-1', '--create-bucket-configuration', 'LocationConstraint=us-west-1'])
subprocess.run(['aws', 's3api', 'put-public-access-block', '--bucket', bucket, '--public-access-block-configuration',
                'BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true'], check=True)
subprocess.run(['aws', 's3', 'cp', str(root / '2d-service-preview.zip'), 's3://' + bucket + '/' + key,
                '--region', 'us-west-1', '--no-progress', '--only-show-errors'], check=True)
signed = subprocess.run(['aws', 's3', 'presign', 's3://' + bucket + '/' + key, '--region', 'us-west-1', '--expires-in', '900'],
                         capture_output=True, text=True, check=True).stdout.strip()
started = call(base + ['start-deployment', '--source-url', signed, '--source-url-type', 'ZIP'] + common)
record = {'jobId': started['jobSummary']['jobId'], 'status': started['jobSummary']['status'], 'stagingBucket': bucket, 'stagingKey': key}
(root / 'qa/v3/deployment.json').write_text(json.dumps(record, indent=2))
print(json.dumps(record))
