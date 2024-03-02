"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

// Middleware to parse JSON requests
app.use(_express["default"].json());
var tasks = [{
  id: 1,
  description: 'Complete Node.js project',
  targetDate: '2024-02-20',
  isCompleted: false
}, {
  id: 2,
  description: 'Learn Express.js',
  targetDate: '2024-02-25',
  isCompleted: true
}];
var getNewId = function getNewId() {
  var reducer = function reducer(max, task) {
    return task.id > max ? task.id : max;
  };
  var maxId = tasks.reduce(reducer, tasks.length > 0 ? tasks[0].id : 0);
  return maxId + 1;
};
var idFromReq = function idFromReq(req) {
  return parseInt(req.params.id, 10);
};

// Get tasks
app.get('/tasks', function (req, res) {
  res.json(tasks);
});

// Get a task by id
app.get('/tasks/:id', function (req, res) {
  var task = tasks.find(function (t) {
    return t.id === idFromReq(req);
  });
  if (!task) {
    return res.status(404).send('Task not found.');
  }
  return res.json(task);
});

// Create a task
app.post('/tasks', function (req, res) {
  var _req$body = req.body,
    description = _req$body.description,
    targetDate = _req$body.targetDate,
    isCompleted = _req$body.isCompleted;
  var task = {
    id: getNewId(),
    description: description,
    targetDate: targetDate,
    isCompleted: isCompleted || false
  };
  tasks.push(task);
  return res.status(201).json(task);
});

// Update a task
app.put('/tasks/:id', function (req, res) {
  var task = tasks.find(function (t) {
    return t.id === idFromReq(req);
  });
  if (!task) {
    return res.status(404).send('Task not found.');
  }
  task.description = req.body.description || task.description;
  task.targetDate = req.body.targetDate || task.targetDate;
  task.isCompleted = req.body.isCompleted || task.isCompleted;
  return res.json(task);
});

// Delete a task
app["delete"]('/tasks/:id', function (req, res) {
  var taskIndex = tasks.findIndex(function (t) {
    return t.id === idFromReq(req);
  });
  if (taskIndex === -1) {
    return res.status(404).send('Task not found.');
  }
  tasks.splice(taskIndex, 1);
  return res.status(204).send();
});
var _default = exports["default"] = app;