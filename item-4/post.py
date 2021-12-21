import requests
import json
import time
from random import randint


url = 'https://xao7zl5edg.execute-api.eu-central-1.amazonaws.com/dev/machinefunction'

headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

while True:
    myobj = {"timestamp": str(time.time()), "sensorId": "4",
             "sensorType": "SENSOR-4",  "address": str(randint(0, 100)), "name": str(str(randint(0, 100))), "gpslocation": str(randint(0, 100)), "menu": str(randint(0, 100)), "availablesnacks": str(randint(0, 100)), "availablebrands": str(randint(0, 100)), "snackssoldtoday": str(randint(0, 100)),
             "API_KEY": "standart_key"}
    x = requests.post(url, data=json.dumps(myobj), headers=headers)
    print("SEND ITEM:", myobj)
    print(x.text)
    time.sleep(10)
