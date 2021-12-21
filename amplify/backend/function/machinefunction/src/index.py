import awsgi
import boto3
import os
from flask_cors import CORS
from flask import Flask, jsonify, request
from uuid import uuid4
client = boto3.client("dynamodb")
os.environ['AWS_DEFAULT_REGION'] = 'eu-central-1'
BASE_ROUTE = "/machine"
TABLE = os.environ.get("STORAGE_MYDB_NAME")

app = Flask(__name__)
CORS(app)


@app.route(BASE_ROUTE, methods=['GET'])
def list_machines():
    response = client.scan(TableName=TABLE)
    data = response['Items']
    while response.get('LastEvaluatedKey'):
        response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
        data.extend(response['Items'])
    return jsonify(data)


@app.route(BASE_ROUTE, methods=['POST'])
def create_machine():
    request_json = request.get_json()
    if request_json.get("API_KEY") != "standart_key":
        return jsonify(message="Wrong API key")
    client.put_item(TableName=TABLE, Item={
        'id': {'S': str(uuid4())},
        'name': {'S': request_json.get('name')},
        'address': {'S': request_json.get('address')},
        'gpslocation': {'S': request_json.get('gpslocation')},
        'menu': {'S': request_json.get('menu')},
        'availablebrands': {'S': request_json.get('availablebrands')},
        'availablesnacks': {'S': request_json.get('availablesnacks')},
        'snackssoldtoday': {'S': request_json.get('snackssoldtoday')},
        'timestamp':{'S': request_json.get('timestamp')},
        'sensorId':{'S': request_json.get('sensorId')},
        'sensorType':{'S': request_json.get('sensorType')},
        'API_KEY': {'S': request_json.get("API_KEY")}


    })
    return jsonify(message="item created")


@app.route(BASE_ROUTE + '/<machine_id>', methods=['GET'])
def get_machine(machine_id):
    item = client.get_item(TableName=TABLE, Key={
        'id': {
            'S': machine_id
        }
    })
    return jsonify(data=item)


@app.route(BASE_ROUTE + '/<machine_id>', methods=['DELETE'])
def delete_machine(machine_id):
    client.delete_item(TableName=TABLE, Key={
        'id': {
            'S': machine_id
        }
    })
    return jsonify(message="machine deleted")


@app.route(BASE_ROUTE + '/<machine_id>', methods=['PUT'])
def update_song(machine_id):
    client.update_item(
        TableName=TABLE,
        Key={'id': {'S': machine_id}},
        UpdateExpression='SET #name = :name, #address = :address',
        ExpressionAttributeNames={
            '#name': 'name',
            '#address': 'address'
        },
        ExpressionAttributeValues={
            ':name': {'S': request.json['name']},
            ':address': {'S': request.json['address']},
        }
    )
    return jsonify(message="item updated")


def handler(event, context):
    return awsgi.response(app, event, context)