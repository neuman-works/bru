import { Request, Response } from 'express';
var { runner } = require('@src/runner');

export function fxRouter(
    req: Request, 
    res: Response
) {
    let run = runner(req.params.app, req.params.function);
    if (run) {
        res.status(200).send({
            code: 200,
            msg: "Successfully executed the function."
        });
    } else {
        res.status(401).send({
            code: 401,
            msg: "Bad request. Failed to execute function."
        });
    }
};