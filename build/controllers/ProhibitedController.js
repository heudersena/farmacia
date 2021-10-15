"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../config/message");
const client_1 = require("../prisma/client");
class ProhibitedController {
    async index(request, response) {
        try {
            const relatorio = await client_1.prisma.prohibited.findMany();
            response.json({
                err: false,
                data: relatorio,
                error: null,
                message: (0, message_1.SUCCESS_MESSAGE)(),
            });
        }
        catch (error) {
            response.json({
                err: true,
                data: null,
                error: null,
                message: (0, message_1.ERROR_MESSAGE)(),
            });
        }
    }
    async getById(request, response) {
        const { id } = request.params;
        try {
            const response_data = await client_1.prisma.prohibited.findFirst({
                where: { id: Number(id) },
            });
            response.json({
                err: false,
                data: response_data,
                error: null,
                message: (0, message_1.SUCCESS_MESSAGE)(),
            });
        }
        catch (error) {
            response.json({
                err: true,
                data: null,
                error: error.message,
                message: (0, message_1.ERROR_MESSAGE)(),
            });
        }
    }
    async store(request, response) {
        const { name } = request.body;
        try {
            const prohibited = await client_1.prisma.prohibited.create({
                data: { name: name },
            });
            response.json({
                err: false,
                data: prohibited,
                error: null,
                message: (0, message_1.SUCCESS_MESSAGE)(),
            });
        }
        catch (error) {
            response.json({
                err: true,
                data: null,
                error: error.message,
                message: (0, message_1.ERROR_MESSAGE)(),
            });
        }
    }
    async update(request, response) {
        const { id } = request.params;
        const { name } = request.body;
        try {
            const response_data = await client_1.prisma.prohibited.update({
                where: { id: Number(id) },
                data: {
                    name: name,
                },
            });
            response.json({
                err: false,
                data: response_data,
                error: null,
                message: (0, message_1.SUCCESS_MESSAGE)(),
            });
        }
        catch (error) {
            response.json({
                err: true,
                data: null,
                error: error.message,
                message: (0, message_1.ERROR_MESSAGE)(),
            });
        }
    }
    async delete(request, response) {
        const { id } = request.params;
        try {
            const response_data = await client_1.prisma.prohibited.delete({
                where: { id: Number(id) },
            });
            response.json({
                err: false,
                data: response_data,
                error: null,
                message: (0, message_1.SUCCESS_MESSAGE)(),
            });
        }
        catch (error) {
            response.json({
                err: true,
                data: null,
                error: error.message,
                message: (0, message_1.ERROR_MESSAGE)(),
            });
        }
    }
}
exports.default = new ProhibitedController();
