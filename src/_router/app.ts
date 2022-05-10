import { Request, Response } from 'express';
var { apps, find } = require('@src/apps');


/* get info about all the apps in the system */
export function appDirectory(
    req: Request, 
    res: Response
) {
    let _apps = apps()
    if (_apps) {
        res.status(200).json(_apps);
    } else {
        res.status(400).send("invalid request.");
    }
};


/* get all the info about a particular app */
export function appDefinitions(
    req: Request, 
    res: Response
) {
    let app = find(req.params.app);
    if (app) {
        res.status(200).send(app);
    } else {
        res.status(400).send("this app doesn't exist.");
    }
};