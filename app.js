const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

const tasks = [
    { id: 1, description: 'Complete Node.js project', targetDate: '2024-02-20', isCompleted: false },
    { id: 2, description: 'Learn Express.js', targetDate: '2024-02-25', isCompleted: true },
];

const getNewId = () => {
    const maxId = tasks.reduce((max, task) => task.id > max ? task.id : max, tasks.length > 0 ? tasks[0].id : 0);
    return maxId + 1;
}

// Get tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Get a task by id
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(task => task.id === parseInt(req.params.id));
    if (!task) {
	    return res.status(404).send('Task not found.');
    }
    res.json(task);
});

// Create a task
app.post('/tasks', (req, res) => {
    const { description, targetDate, isCompleted } = req.body;
    const task = {
        id: getNewId(),
        description,
        targetDate,
        isCompleted: isCompleted || false,
    };
    tasks.push(task);
    res.status(201).json(task);
});

// Update a task
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(task => task.id === parseInt(req.params.id));
    if (!task) {
	    return res.status(404).send('Task not found.');
    }
    task.description = req.body.description || task.description;
    task.targetDate = req.body.targetDate || task.targetDate;
    task.isCompleted = req.body.isCompleted || task.isCompleted;
    res.json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id));
    if (taskIndex === -1) {
	    return res.status(404).send('Task not found.');
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

module.exports = app;
