
# Docker - Build
docker build --platform linux/amd64 -t my-task-api:latest .
docker run --platform linux/amd64 -v ~/.aws:/root/.aws -p 9000:8080 my-task-api:latest

# Docker - Test
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "version": "2.0",
    "routeKey": "POST /tasks",
    "rawPath": "/tasks",
    "rawQueryString": "",
    "headers": {
        "Content-Type": "application/json"
    },
    "requestContext": {
        "http": {
            "method": "POST",
            "path": "/tasks"
        }
    },
    "body": "{\"description\": \"Your task description here\", \"targetDate\": \"2024-03-07\", \"isCompleted\": false}"
}' \
  http://localhost:9000/2015-03-31/functions/function/invocations

curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{
    "version": "2.0",
    "routeKey": "GET /tasks",
    "rawPath": "/tasks",
    "rawQueryString": "",
    "requestContext": {
        "http": {
            "method": "GET",
            "path": "/tasks"
        }
    }
}'
