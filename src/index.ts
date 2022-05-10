require('dotenv').config();

import 'module-alias/register';
import express, { Express } from 'express';
import { router } from './_router'
import dotenv from 'dotenv';

var admin = require("firebase-admin");
var serviceAccount = require("../firebase/credentials.json");
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

/* 
  routing is done inside the router function in _router 
*/
router(app);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}!`);
});