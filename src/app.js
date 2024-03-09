import express from 'express';

function buildApp(database) {
    const app = express();

    // Middleware to parse JSON requests
    app.use(express.json());

    const idFromReq = (req) => req.params.id;

    // Get tasks
    app.get('/tasks', async (req, res) => {
        const tasks = await database.getTasks();
        res.json(tasks);
    });

    // Get a task by id
    app.get('/tasks/:id', async (req, res) => {
        const id = idFromReq(req);
        const task = await database.findTask(id);
        if (!task) {
            return res.status(404).send('Task not found.');
        }
        return res.json(task);
    });

    // Create a task
    app.post('/tasks', async (req, res) => {
        const { description, targetDate, isCompleted } = req.body;
        const task = {
            description,
            targetDate,
            isCompleted: isCompleted || false,
        };

        const createdTask = await database.createTask(task);

        return res.status(201).json(createdTask);
    });

    // Update a task
    app.put('/tasks/:id', async (req, res) => {
        const task = await database.findTask(idFromReq(req));
        if (!task) {
            return res.status(404).send('Task not found.');
        }
        task.description = req.body.description || task.description;
        task.targetDate = req.body.targetDate || task.targetDate;
        task.isCompleted = req.body.isCompleted || task.isCompleted;

        const updatedTask = await database.updateTask(task);

        return res.json(updatedTask);
    });

    // Delete a task
    app.delete('/tasks/:id', async (req, res) => {
        const task = await database.findTask(idFromReq(req));
        if (!task) {
            return res.status(404).send('Task not found.');
        }

        await database.deleteTask(task);

        return res.status(204).send();
    });
    return app;
}
export default buildApp;
