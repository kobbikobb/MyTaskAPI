# Docker - Build
docker build --platform linux/amd64 -t my-task-api:latest .
docker run --platform linux/amd64 -p 9000:8080 my-task-api:latest

# Docker - Test
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


