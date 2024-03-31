# My Tasks API

A simple rest API for Tasks.

## Run locally with a in memory database
- npm run start-local

### Test Locally running instance
GET
- curl http://localhost:3000/tasks
- curl http://localhost:3000/tasks/2
PUT
- curl -X PUT -H "Content-Type: application/json" -d '{"description":"New Task Description","targetDate":"2024-02-20","isCompleted":false}' http://localhost:3000/tasks/1
POST
- curl -X POST -H "Content-Type: application/json" -d '{"description":"New Task","targetDate":"2024-02-22","isCompleted":false}' http://localhost:3000/tasks
Delete
- curl -X DELETE http://localhost:3000/tasks/1

## To create a produciton build for AWS Lambda
- ./prod-build.sh
- copy zip file from /prod-build/prod-build.zip into AWS Lambda.

###
- Create a new DynamoDB table:
  - Name: my-task-dynamodb-table
  - Partition key: id

# Format json in the terminal
- brew install jq
- curl .... | jq

