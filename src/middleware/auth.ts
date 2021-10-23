import { Request, Response, NextFunction } from 'express';
import { decode, verify } from 'jsonwebtoken';
import { ERROR_JWT } from '../config/message';

interface IPayload {
    sub: string;
}

const Auth = (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization;
    if (!authHeader)
        return response.json({ err: true, jwt: true, message: ERROR_JWT() });

    const [, token] = authHeader.split(' ');
    try {
        const { sub } = verify(token, process.env.JWT) as IPayload;
        request.userId = Number(sub)
        console.log(sub);
        
        return next();
    } catch (error) {
        return response.json({ err: true, jwt: true, message: ERROR_JWT() });
    }
};

export { Auth };
