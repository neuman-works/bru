import { Express } from 'express';
import { appDirectory, appDefinitions } from './app';
import { fxRouter } from './function';


/* 
  TODO:
  4. Get all apps from local and upload to cloud
  2. Fetch all app functions, definitions & images incl. auth
  3. Execute code/json template to run a block
*/


export function router(
  app: Express
) {
  app.get('/', (req, res) => res.send('⚡️ You have reached Brú ⚡️'));
  app.get('/apps', appDirectory);
  app.get('/app/:app', appDefinitions);
  app.get('/app/:app/function/:function', fxRouter);
};