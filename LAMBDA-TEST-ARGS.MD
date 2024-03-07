# GET Tasks
```
{
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
}
```
# GET Task
```
{
    "version": "2.0",
    "routeKey": "GET /tasks/{taskId}",
    "rawPath": "/tasks/6ee56911-a461-4cf7-b70f-d22df9f47c8c",
    "rawQueryString": "",
    "requestContext": {
        "http": {
            "method": "GET",
            "path": "/tasks/6ee56911-a461-4cf7-b70f-d22df9f47c8c"
        }
    }
}
```
# POST Task
```
{
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
}
```
# PUT Task
```
{
    "version": "2.0",
    "routeKey": "PUT /tasks/{taskId}",
    "rawPath": "/tasks/e5e2f39b-b16f-4ebe-a3c9-670f926de901",
    "rawQueryString": "",
    "headers": {
        "Content-Type": "application/json"
    },
    "requestContext": {
        "http": {
            "method": "PUT",
            "path": "/tasks/e5e2f39b-b16f-4ebe-a3c9-670f926de901"
        }
    },
    "body": "{\"description\": \"Updated task description\", \"targetDate\": \"2024-03-07\", \"isCompleted\": true}"
}
```
# DELETE Task
```
{
    "version": "2.0",
    "routeKey": "DELETE /tasks/{taskId}",
    "rawPath": "/tasks/6ee56911-a461-4cf7-b70f-d22df9f47c8c",
    "rawQueryString": "",
    "requestContext": {
        "http": {
            "method": "DELETE",
            "path": "/tasks/6ee56911-a461-4cf7-b70f-d22df9f47c8c"
        }
    }
}
```
