"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../config/message");
const client_1 = require("../prisma/client");
class SaidaController {
    async index(request, response) {
        try {
            const response_data = await client_1.prisma.exit.findMany();
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
                message: (0, message_1.ERROR_NULL)(),
            });
        }
    }
    async getById(request, response) {
        const { id } = request.params;
        try {
            const response_data = await client_1.prisma.exit.findFirst({
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
                message: (0, message_1.ERROR_NULL)(),
            });
        }
    }
    async store(request, response) {
        const { name } = request.body;
        try {
            const response_data = await client_1.prisma.exit.create({
                data: { name: name },
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
                message: (0, message_1.ERROR_NULL)(),
            });
        }
    }
    async update(request, response) {
        const { id } = request.params;
        const { name } = request.body;
        try {
            const response_data = await client_1.prisma.exit.update({
                where: { id: Number(id) },
                data: { name: name },
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
                message: (0, message_1.ERROR_NULL)(),
            });
        }
    }
    async delete(request, response) {
        const { id } = request.params;
        try {
            const response_data = await client_1.prisma.exit.delete({
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
                message: (0, message_1.ERROR_NULL)(),
            });
        }
    }
}
exports.default = new SaidaController();
