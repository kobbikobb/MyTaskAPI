import serverless from 'serverless-http';
import buildApp from './app';
import fakeDatabase from './fakeDatabase';

const app = buildApp(fakeDatabase);

/* eslint-disable-next-line import/prefer-default-export */
export const handler = serverless(app);
