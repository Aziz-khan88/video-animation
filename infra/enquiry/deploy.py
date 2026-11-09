"""Deploy the intake with the authenticated AWS CLI; no credentials in source."""
from pathlib import Path
import json
import secrets
import subprocess

ROOT = Path(__file__).resolve().parents[2]
REGION = 'us-west-1'
STACK = 'videoanimation-enquiries'
INBOX = 'hello@videoanimation.us'
origins = ['https://two-d-premium.d3hxbg02ceyurf.amplifyapp.com', 'https://video-animation-new.vercel.app', 'http://127.0.0.1:3012', 'http://127.0.0.1:8879']
def aws(*args):
    run = subprocess.run(['aws', *args, '--region', REGION, '--output', 'json'], capture_output=True, text=True, encoding='utf-8')
    if run.returncode:
        raise RuntimeError(run.stderr)
    return json.loads(run.stdout) if run.stdout.strip() else {}

ref=lambda name:{'Ref':name}
get=lambda name,attribute:{'Fn::GetAtt':[name,attribute]}
sub=lambda value:{'Fn::Sub':value}
resources={
 'Leads':{'Type':'AWS::DynamoDB::Table','DeletionPolicy':'Retain','UpdateReplacePolicy':'Retain','Properties':{
  'TableName':'videoanimation-enquiries','BillingMode':'PAY_PER_REQUEST','AttributeDefinitions':[{'AttributeName':'pk','AttributeType':'S'},{'AttributeName':'notificationStatus','AttributeType':'S'}],
  'KeySchema':[{'AttributeName':'pk','KeyType':'HASH'}],'GlobalSecondaryIndexes':[{'IndexName':'notification-status','KeySchema':[{'AttributeName':'notificationStatus','KeyType':'HASH'}],'Projection':{'ProjectionType':'ALL'}}],
  'TimeToLiveSpecification':{'AttributeName':'expiresAt','Enabled':True},'SSESpecification':{'SSEEnabled':True},'PointInTimeRecoverySpecification':{'PointInTimeRecoveryEnabled':True}}},
 'Role':{'Type':'AWS::IAM::Role','Properties':{'AssumeRolePolicyDocument':{'Version':'2012-10-17','Statement':[{'Effect':'Allow','Principal':{'Service':'lambda.amazonaws.com'},'Action':'sts:AssumeRole'}]},'Policies':[{'PolicyName':'EnquiryIntake','PolicyDocument':{'Version':'2012-10-17','Statement':[
  {'Effect':'Allow','Action':['dynamodb:GetItem','dynamodb:PutItem','dynamodb:UpdateItem'],'Resource':get('Leads','Arn')},
  {'Effect':'Allow','Action':['dynamodb:Query'],'Resource':sub('${Leads.Arn}/index/notification-status')},
  {'Effect':'Allow','Action':['ses:SendEmail'],'Resource':sub('arn:aws:ses:${AWS::Region}:${AWS::AccountId}:identity/'+INBOX),'Condition':{'ForAllValues:StringEquals':{'ses:Recipients':[INBOX]}}},
  {'Effect':'Allow','Action':['logs:CreateLogStream','logs:PutLogEvents'],'Resource':sub('arn:aws:logs:${AWS::Region}:${AWS::AccountId}:log-group:/aws/lambda/videoanimation-enquiries:*')}]}}]}},
 'LogGroup':{'Type':'AWS::Logs::LogGroup','Properties':{'LogGroupName':'/aws/lambda/videoanimation-enquiries','RetentionInDays':14}},
 'Function':{'Type':'AWS::Lambda::Function','DependsOn':'LogGroup','Properties':{'FunctionName':'videoanimation-enquiries','Runtime':'python3.13','Handler':'index.handler','Role':get('Role','Arn'),'Timeout':20,'MemorySize':256,
  'Code':{'ZipFile':(Path(__file__).parent/'handler.py').read_text()},'Environment':{'Variables':{'LEAD_TABLE':ref('Leads'),'ENQUIRY_INBOX':INBOX,'ALLOWED_ORIGINS':','.join(origins),'RATE_SALT':ref('RateSalt')}}}},
 'Api':{'Type':'AWS::ApiGatewayV2::Api','Properties':{'Name':'videoanimation-enquiries','ProtocolType':'HTTP','CorsConfiguration':{'AllowOrigins':origins,'AllowMethods':['POST','OPTIONS'],'AllowHeaders':['content-type'],'MaxAge':600}}},
 'Integration':{'Type':'AWS::ApiGatewayV2::Integration','Properties':{'ApiId':ref('Api'),'IntegrationType':'AWS_PROXY','IntegrationUri':get('Function','Arn'),'PayloadFormatVersion':'2.0'}},
 'Route':{'Type':'AWS::ApiGatewayV2::Route','Properties':{'ApiId':ref('Api'),'RouteKey':'POST /enquiries','Target':{'Fn::Join':['',['integrations/',ref('Integration')]]}}},
 'Stage':{'Type':'AWS::ApiGatewayV2::Stage','Properties':{'ApiId':ref('Api'),'StageName':'$default','AutoDeploy':True,'DefaultRouteSettings':{'ThrottlingBurstLimit':10,'ThrottlingRateLimit':2}}},
 'InvokePermission':{'Type':'AWS::Lambda::Permission','Properties':{'FunctionName':ref('Function'),'Action':'lambda:InvokeFunction','Principal':'apigateway.amazonaws.com','SourceArn':sub('arn:aws:execute-api:${AWS::Region}:${AWS::AccountId}:${Api}/*/POST/enquiries')}},
 'RetryRule':{'Type':'AWS::Events::Rule','Properties':{'Description':'Retry pending enquiry notifications','ScheduleExpression':'rate(5 minutes)','State':'ENABLED','Targets':[{'Arn':get('Function','Arn'),'Id':'retry-enquiries'}]}},
 'RetryPermission':{'Type':'AWS::Lambda::Permission','Properties':{'FunctionName':ref('Function'),'Action':'lambda:InvokeFunction','Principal':'events.amazonaws.com','SourceArn':get('RetryRule','Arn')}}}
template={'AWSTemplateFormatVersion':'2010-09-09','Description':'Validated enquiry intake with durable storage and verified-inbox notifications',
 'Parameters':{'RateSalt':{'Type':'String','NoEcho':True}},'Resources':resources,'Outputs':{'Endpoint':{'Value':sub('https://${Api}.execute-api.${AWS::Region}.amazonaws.com/enquiries')},'Table':{'Value':ref('Leads')}}}
generated=Path(__file__).parent/'stack.generated.json'
generated.write_text(json.dumps(template,indent=2))
try:
    existing=aws('cloudformation','describe-stacks','--stack-name',STACK)
except RuntimeError as exc:
    if 'does not exist' not in str(exc): raise
    existing=None
params=[{'ParameterKey':'RateSalt','UsePreviousValue':True}] if existing else [{'ParameterKey':'RateSalt','ParameterValue':secrets.token_hex(32)}]
params_file=Path(__file__).parent/'parameters.local.json'
params_file.write_text(json.dumps(params))
try:
    operation='update-stack' if existing else 'create-stack'
    aws('cloudformation',operation,'--stack-name',STACK,'--template-body','file://'+str(generated),'--parameters','file://'+str(params_file),'--capabilities','CAPABILITY_IAM')
    print(json.dumps({'stack':STACK,'operation':operation,'status':'started'}))
finally:
    params_file.unlink(missing_ok=True)
