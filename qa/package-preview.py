from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import json, hashlib
root=Path(__file__).resolve().parents[1]
archive=root/'2d-service-preview.zip'
with ZipFile(archive,'w',ZIP_DEFLATED,compresslevel=6) as z:
    for p in (root/'out').rglob('*'):
        if p.is_file(): z.write(p,p.relative_to(root/'out').as_posix())
record={'bytes':archive.stat().st_size,'sha256':hashlib.sha256(archive.read_bytes()).hexdigest()}
(root/'qa/preview-artifact.json').write_text(json.dumps(record,indent=2))
print(json.dumps(record))
