import { Request, Response } from 'express';
import {
    ERROR_MESSAGE,
    SUCCESS_MESSAGE,
    ERROR_NULL,
    CUSTOM_MESSAGE,
} from '../config/message';
import { prisma } from '../prisma/client';

class ProhibitedController {
    async index(request: Request, response: Response) {
        try {
            const relatorio = await prisma.prohibited.findMany();
            response.json({
                err: false,
                data: relatorio,
                error: null,
                message: SUCCESS_MESSAGE(),
            });
        } catch (error) {
            response.json({
                err: true,
                data: null,
                error: null,
                message: ERROR_MESSAGE(),
            });
        }
    }
    async getById(request: Request, response: Response) {
        const { id } = request.params;
        try {
            const response_data = await prisma.prohibited.findFirst({
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
                message: ERROR_MESSAGE(),
            });
        }
    }
    async store(request: Request, response: Response) {
        const { name } = request.body;
        try {
            const prohibited = await prisma.prohibited.create({
                data: { name: name },
            });
            response.json({
                err: false,
                data: prohibited,
                error: null,
                message: SUCCESS_MESSAGE(),
            });
        } catch (error) {
            response.json({
                err: true,
                data: null,
                error: error.message,
                message: ERROR_MESSAGE(),
            });
        }
    }
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name } = request.body;
        try {
            const response_data = await prisma.prohibited.update({
                where: { id: Number(id) },
                data: {
                    name: name,
                },
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
                message: ERROR_MESSAGE(),
            });
        }
    }
    async delete(request: Request, response: Response) {
        const { id } = request.params;
        try {
            const response_data = await prisma.prohibited.delete({
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
                message: ERROR_MESSAGE(),
            });
        }
    }
}

export default new ProhibitedController();
