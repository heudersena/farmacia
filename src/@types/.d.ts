import * as http from 'http';
import { Request } from "express"

declare module 'express-serve-static-core' {
    export interface Request extends http.IncomingMessage, Express.Request {
        userId: { username: string; role: string; id: number };
        id: number;
        skip: any;
        pagination: any;
    }
}