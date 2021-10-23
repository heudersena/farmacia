import { Request, Response } from 'express';
import {
    ERROR_MESSAGE,
    SUCCESS_MESSAGE,
    ERROR_NULL,
    CUSTOM_MESSAGE,
} from '../config/message';
import { prisma } from '../prisma/client';

class ExempleController {
    async index(request: Request, response: Response) {}
    async getById(request: Request, response: Response) {}
    async store(request: Request, response: Response) {}
    async update(request: Request, response: Response) {}
    async delete(request: Request, response: Response) {}
}

export default new ExempleController();
