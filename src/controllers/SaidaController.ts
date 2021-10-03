import { Request, Response } from 'express';
import {
    ERROR_MESSAGE,
    SUCCESS_MESSAGE,
    ERROR_NULL,
    CUSTOM_MESSAGE,
} from '../config/message';
import { prisma } from '../prisma/client';

class SaidaController {
    async index(request: Request, response: Response) {
        try {
            const response_data = await prisma.exit.findMany();
            response.json({
                err: false,
                data: response_data,
                error: null,
                message: SUCCESS_MESSAGE(),
            });
        } catch (error) {
            response.json({
                err: true,
                data: null,
                error: error.message,
                message: ERROR_NULL(),
            });
        }
    }
    async getById(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const response_data = await prisma.exit.findFirst({
                where: { id: Number(id) },
            });
            response.json({
                err: false,
                data: response_data,
                error: null,
                message: SUCCESS_MESSAGE(),
            });
        } catch (error) {
            response.json({
                err: true,
                data: null,
                error: error.message,
                message: ERROR_NULL(),
            });
        }
    }
    async store(request: Request, response: Response) {
        const { name } = request.body;
        try {
            const response_data = await prisma.exit.create({
                data: { name: name },
            });
            response.json({
                err: false,
                data: response_data,
                error: null,
                message: SUCCESS_MESSAGE(),
            });
        } catch (error) {
            response.json({
                err: true,
                data: null,
                error: error.message,
                message: ERROR_NULL(),
            });
        }
    }
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name } = request.body;
        try {
            const response_data = await prisma.exit.update({
                where: { id: Number(id) },
                data: { name: name },
            });
            response.json({
                err: false,
                data: response_data,
                error: null,
                message: SUCCESS_MESSAGE(),
            });
        } catch (error) {
            response.json({
                err: true,
                data: null,
                error: error.message,
                message: ERROR_NULL(),
            });
        }
    }
    async delete(request: Request, response: Response) {
        const { id } = request.params;
        try {
            const response_data = await prisma.exit.delete({
                where: { id: Number(id) },
            });
            response.json({
                err: false,
                data: response_data,
                error: null,
                message: SUCCESS_MESSAGE(),
            });
        } catch (error) {
            response.json({
                err: true,
                data: null,
                error: error.message,
                message: ERROR_NULL(),
            });
        }
    }
}

export default new SaidaController();
