const tasks = [
    {
        id: 1, description: 'Complete Node.js project', targetDate: '2024-02-20', isCompleted: false,
    },
    {
        id: 2, description: 'Learn Express.js', targetDate: '2024-02-25', isCompleted: true,
    },
];

const getNewId = () => {
    const reducer = (max, task) => (task.id > max ? task.id : max);
    const maxId = tasks.reduce(reducer, tasks.length > 0 ? tasks[0].id : 0);
    return maxId + 1;
};

const database = {

    async getTasks() {
        return tasks;
    },

    async findTask(id) {
        return tasks.find((t) => t.id === id);
    },

    async createTask(task) {
        const newTask = {
            id: getNewId(),
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
