import serverless from 'serverless-http';
import buildApp from './app';
import database from './dynamodbDatabase';

const app = buildApp(database);

/* eslint-disable-next-line import/prefer-default-export */
export const handler = serverless(app);
