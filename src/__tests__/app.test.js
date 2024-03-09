import request from 'supertest';
import buildApp from '../app';
import fakeDatabase from '../fakeDatabase';

const app = buildApp(fakeDatabase);

const createATask = async () => {
    const response = await request(app)
        .post('/tasks')
        .send({
            description: 'A Task',
            targetDate: '2002-01-12',
            isCompleted: false,
        })
        .expect(201);

    return response.body;
};

describe('app', () => {
    it('should get tasks', async () => {
        const task1 = await createATask();
        const task2 = await createATask();

        const response = await request(app)
            .get('/tasks')
            .expect(200);
        const tasks = response.body;

        expect(tasks).toHaveLength(2);
        expect(tasks).toContainEqual(task1);
        expect(tasks).toContainEqual(task2);
    });

    it('should get task', async () => {
        const existingTask = await createATask();
        const response = await request(app)
            .get(`/tasks/${existingTask.id}`)
            .expect(200);
        const task = response.body;

        expect(task).toEqual(existingTask);
    });

    it('should update task', async () => {
        const existingTask = await createATask();

        const response = await request(app)
            .put(`/tasks/${existingTask.id}`)
            .send({
                description: 'New',
                targetDate: '2024-10-15',
                isCompleted: true,
            })
            .expect(200);
        const task = response.body;

        expect(task.id).toEqual(existingTask.id);
        expect(task.description).toEqual('New');
        expect(task.targetDate).toEqual('2024-10-15');
        expect(task.isCompleted).toEqual(true);
    });

    it('should create task', async () => {
        const response = await request(app)
            .post('/tasks')
            .send({
                description: 'New',
                targetDate: '2024-10-15',
                isCompleted: true,
            })
            .expect(201);
        const task = response.body;

        expect(task.id).toBeDefined();
        expect(task.description).toEqual('New');
        expect(task.targetDate).toEqual('2024-10-15');
        expect(task.isCompleted).toEqual(true);
    });

    it('should delete task', async () => {
        const existingTask = await createATask();

        await request(app)
            .delete(`/tasks/${existingTask.id}`)
            .expect(204);
        await request(app)
            .get(`/tasks/${existingTask.id}`)
            .expect(404);
    });
});
