import { v4 as uuid } from 'uuid';

const tasks = [];

const database = {

    async getTasks() {
        return tasks;
    },

    async findTask(id) {
        return tasks.find((t) => t.id === id);
    },

    async createTask(task) {
        const newTask = {
            id: uuid(),
            description: task.description,
            targetDate: task.targetDate,
            isCompleted: task.isCompleted,
        };

        tasks.push(newTask);

        return newTask;
    },

    async updateTask(task) {
        const existingTask = this.findTask(task.id);
        if (!existingTask) {
            throw Error('Task not found.');
        }
        existingTask.description = task.description;
        existingTask.targetDate = task.targetDate;
        existingTask.isCompleted = task.isCompleted;

        return existingTask;
    },

    async deleteTask(task) {
        const taskIndex = tasks.findIndex((t) => t.id === task.id);
        if (taskIndex === -1) {
            throw Error('Task not found.');
        }
        tasks.splice(taskIndex, 1);
    },

};

export default database;
