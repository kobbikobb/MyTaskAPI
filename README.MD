# My Tasks API

A simple rest API for Tasks.

# To start locally
- npm run start-local

# To create a produciton build for AWS Lambda
- ./prod-build.sh
- copy zip file from /prod-build/prod-build.zip into AWS Lambda.

# Format json in the terminal
- brew install jq
- curl .... | jq

## Try it out with curl
GET
- curl http://localhost:3000/tasks
- curl http://localhost:3000/tasks/2
PUT
- curl -X PUT -H "Content-Type: application/json" -d '{"description":"New Task Description","targetDate":"2024-02-20","isCompleted":false}' http://localhost:3000/tasks/1
POST
- curl -X POST -H "Content-Type: application/json" -d '{"description":"New Task","targetDate":"2024-02-22","isCompleted":false}' http://localhost:3000/tasks
Delete
- curl -X DELETE http://localhost:3000/tasks/1
