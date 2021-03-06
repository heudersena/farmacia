"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../config/message");
const client_1 = require("../prisma/client");
class CompanyController {
    async index(request, response) {
        try {
            const company = await client_1.prisma.company.findMany();
            response.json({ err: false, data: company, error: null, message: (0, message_1.SUCCESS_MESSAGE)() });
        }
        catch (error) {
            response.json({ err: true, data: null, error: null, message: (0, message_1.ERROR_MESSAGE)() });
        }
    }
    async getById(request, response) {
        const { id } = request.params;
        try {
            const company = await client_1.prisma.company.findFirst({ where: { id: Number(id) } });
            if (!company)
                response.json({ err: true, data: null, error: null, message: (0, message_1.ERROR_NULL)() });
            response.json({ err: false, data: company, error: null, message: (0, message_1.SUCCESS_MESSAGE)() });
        }
        catch (error) {
        }
    }
    async store(request, response) {
        const { register, name, address, number_phone } = request.body;
        if (register === '' || name === '' || address === '' || number_phone === '') {
            return response.json({ err: true, data: null, error: null, message: (0, message_1.CUSTOM_MESSAGE)("OLHA! PREENCHA TODOS OS CAMPOS QUE SÃO OBRIGATÓRIOS") });
        }
        try {
            const company = await client_1.prisma.company.create({
                data: {
                    register, name, address, number_phone
                }
            });
            response.json({ err: false, data: company, error: null, message: (0, message_1.SUCCESS_MESSAGE)() });
        }
        catch (error) {
            response.json({ err: true, data: null, error: error.message, message: (0, message_1.ERROR_MESSAGE)() });
        }
    }
    async update(request, response) {
        const { id } = request.params;
        const { register, name, address, number_phone, isActive } = request.body;
        try {
            const company = await client_1.prisma.company.findFirst({ where: { id: Number(id) } });
            if (!company)
                response.json({ err: true, data: null, error: null, message: (0, message_1.ERROR_NULL)() });
            const company_update = await client_1.prisma.company.update({
                where: { id: Number(id) }, data: {
                    register, name, address, number_phone, isActive: Boolean(isActive)
                }
            });
            response.json({ err: false, data: company_update, error: null, message: (0, message_1.SUCCESS_MESSAGE)() });
        }
        catch (error) {
        }
    }
    async delete(request, response) {
        const { id } = request.params;
        try {
            const company = await client_1.prisma.company.delete({ where: { id: Number(id) } });
            response.json({ err: false, data: company, error: null, message: (0, message_1.CUSTOM_MESSAGE)(`REGISTRO ${company.register} DELETADO COM SUCESSO!`) });
        }
        catch (error) {
            response.json({ err: true, data: null, error: error.message, message: (0, message_1.ERROR_MESSAGE)() });
        }
    }
}
exports.default = new CompanyController();
