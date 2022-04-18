import express, { Express } from 'express';
import { indexRouter } from './_router/index';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.get('/', indexRouter);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});