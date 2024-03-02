import request from 'supertest';
import app from '../app';

describe('app', () => {
    it('should get tasks', async () => {
        const response = await request(app)
            .get('/tasks')
            .expect(200);

        const tasks = response.body;

        expect(tasks).toHaveLength(2);
        expect(tasks[0].id).toEqual(1);
    });

    it('should get task', async () => {
        const response = await request(app)
            .get('/tasks/1')
            .expect(200);

        const task = response.body;

        expect(task.id).toEqual(1);
        expect(task.description).toEqual('Complete Node.js project');
        expect(task.targetDate).toEqual('2024-02-20');
        expect(task.isCompleted).toEqual(false);
    });

    it('should update task', async () => {
        const response = await request(app)
            .put('/tasks/1')
            .send({
                description: 'New',
                targetDate: '2024-10-15',
                isCompleted: true,
            })
            .expect(200);

        const task = response.body;

        expect(task.id).toEqual(1);
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

        expect(task.id).toEqual(3);
        expect(task.description).toEqual('New');
        expect(task.targetDate).toEqual('2024-10-15');
        expect(task.isCompleted).toEqual(true);
    });

    it('should delete task', async () => {
        await request(app)
            .delete('/tasks/1')
            .expect(204);
    });
});
