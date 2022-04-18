import { Request, Response } from 'express';


export function indexRouter(
    req: Request, 
    res: Response
) {
    res.send('Server');
};