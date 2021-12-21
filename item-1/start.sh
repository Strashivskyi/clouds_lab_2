while [ : ]
do
    python3 post.py --endpoint a1mb9pept7st5b-ats.iot.eu-central-1.amazonaws.com --cert 4a03d59a26add199934605d7944b55be3c43203151b4238316c3557863b9936d-certificate.pem.crt --key 4a03d59a26add199934605d7944b55be3c43203151b4238316c3557863b9936d-private.pem.key --topic SUBSCRIPT
    sleep 10
done