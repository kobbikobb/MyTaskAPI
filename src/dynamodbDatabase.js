/* eslint-disable no-console */
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { v4 as uuid } from 'uuid';

const awsRegion = 'us-east-1';
const dynamodb = DynamoDBDocument.from(new DynamoDB({ region: awsRegion }));
const tableName = 'my-task-dynamodb-table';

const database = {

    async getTasks() {
        try {
            const response = await dynamodb.scan({ TableName: tableName });
            return response.Items;
        } catch (error) {
            console.error('Error fetching tasks:', error);
            throw error;
        }
    },

    async findTask(id) {
        try {
            const response = await dynamodb.get({ TableName: tableName, Key: { id } });
            return response.Item;
        } catch (error) {
            console.error('Error finding task:', error);
            throw error;
        }
    },

    async createTask(task) {
        try {
            const newTask = {
                id: uuid(),
                description: task.description,
                targetDate: task.targetDate,
                isCompleted: task.isCompleted,
            };
            return dynamodb.put({ TableName: tableName, Item: newTask });
        } catch (error) {
            console.error('Error creating task:', error);
            throw error;
        }
    },

    async updateTask(task) {
        try {
            const updatedTask = {
                id: task.id,
                descripton: task.description,
                targetDate: task.targetDate,
                isCompleted: task.isCompleted,
            };
            return dynamodb.put({ TableName: tableName, Item: updatedTask });
        } catch (error) {
            console.error('Error updating task:', error);
            throw error;
        }
    },

    async deleteTask(task) {
        try {
            const { id } = task;
            return dynamodb.delete({ TableName: tableName, Key: { id } });
        } catch (error) {
            console.error('Error deleting task:', error);
            throw error;
        }
    },
};

export default database;
