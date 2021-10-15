"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../config/message");
const client_1 = require("../prisma/client");
class TypeProductController {
    async index(request, response) {
        try {
            const data = request.userId;
            const product_type = await client_1.prisma.typeProduct.findMany();
            response.json({
                err: false,
                data: product_type,
                error: null,
                message: (0, message_1.SUCCESS_MESSAGE)(),
            });
        }
        catch (error) {
            response.json({
                err: true,
                data: null,
                error: error,
                message: (0, message_1.ERROR_MESSAGE)(),
            });
        }
    }
    async getById(request, response) {
        const { id } = request.params;
        try {
            const product_type = await client_1.prisma.typeProduct.findFirst({
                where: { id: Number(id) },
            });
            if (!product_type)
                response.json({
                    err: true,
                    data: null,
                    error: null,
                    message: (0, message_1.ERROR_NULL)(),
                });
            response.json({
                err: false,
                data: product_type,
                error: null,
                message: (0, message_1.SUCCESS_MESSAGE)(),
            });
        }
        catch (error) {
            response.json({
                err: true,
                data: null,
                error: error,
                message: (0, message_1.ERROR_MESSAGE)(),
            });
        }
    }
    async store(request, response) {
        const { name } = request.body;
        try {
            const product_type = await client_1.prisma.typeProduct.create({
                data: { name, inventory: 0 },
            });
            response.json({
                err: false,
                data: product_type,
                error: null,
                message: (0, message_1.SUCCESS_MESSAGE)(),
            });
        }
        catch (error) {
            response.json({
                err: true,
                data: null,
                error: error,
                message: (0, message_1.ERROR_MESSAGE)(),
            });
        }
    }
    async update(request, response) {
        const { id } = request.params;
        const { name, isActive, inventory } = request.body;
        try {
            const product_type = await client_1.prisma.typeProduct.update({
                where: { id: Number(id) },
                data: {
                    name,
                    isActive: Boolean(isActive),
                    inventory: Number(inventory),
                },
            });
            response.json({
                err: false,
                data: product_type,
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
            const product_type = await client_1.prisma.typeProduct.delete({
                where: { id: Number(id) },
            });
            response.json({
                err: false,
                data: product_type,
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
exports.default = new TypeProductController();
