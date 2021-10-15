"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../config/message");
const client_1 = require("../prisma/client");
class ReportController {
    async index(request, response) {
        try {
            const relatorio = await client_1.prisma.report.findMany({ orderBy: { id: "desc" }, include: { TypeProduct: true } });
            response.json({ err: false, data: relatorio, error: null, message: (0, message_1.SUCCESS_MESSAGE)() });
        }
        catch (error) {
            response.json({ err: true, data: null, error: null, message: (0, message_1.ERROR_MESSAGE)() });
        }
    }
    async getById(request, response) { }
    async store(request, response) { }
    async update(request, response) { }
    async delete(request, response) { }
}
exports.default = new ReportController();
