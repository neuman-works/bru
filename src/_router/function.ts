import { Request, Response } from 'express';
var { runner } = require('@src/runner');

export function fxRouter(
    req: Request, 
    res: Response
) {
    console.log(req.params)
    // check nosql table for data
    // if integration_type === 'api'
    //    execute api function
    runner({

    })

    res.send('Server');
};