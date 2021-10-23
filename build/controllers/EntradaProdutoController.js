"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../services/crud");
const helper_1 = require("../config/helper");
const message_1 = require("../config/message");
const client_1 = require("../prisma/client");
class EntradaProdutoController {
    async index(request, response) {
        try {
            const response_data = await client_1.prisma.product.findMany({ include: { Company: true, Prohibited: true, TypeProduct: true } });
            response.json({ err: false, data: response_data, error: null, message: (0, message_1.SUCCESS_MESSAGE)() });
        }
        catch (error) {
            response.json({ err: true, data: null, error: error.message, message: (0, message_1.ERROR_NULL)() });
        }
    }
    async getById(request, response) { }
    async store(request, response) {
        const { nfe, expires, quantity, prohibitedId, companyId, typeProductId } = request.body;
        const user_id = request.userId;
        const code_unique = (0, helper_1.gerarLote)();
        if (expires === "" || quantity === "" || prohibitedId === "" || companyId === "" || typeProductId === "") {
            return response.json({ err: true, data: null, error: null, message: (0, message_1.CUSTOM_MESSAGE)("OLHA! PREENCHA TODOS OS CAMPOS QUE SÃO OBRIGATÓRIOS") });
        }
        const produto_quantidade = await client_1.prisma.typeProduct.findFirst({ where: { id: Number(typeProductId) }, select: { inventory: true } });
        const total = Number(quantity) + (produto_quantidade === null || produto_quantidade === void 0 ? void 0 : produto_quantidade.inventory);
        if (!produto_quantidade)
            return response.json({ err: true, data: null, error: null, message: (0, message_1.ERROR_NULL)() });
        const insert_data = await client_1.prisma.product.create({ data: { nfe: nfe, expires: expires, code_unique: code_unique, quantity: Number(total), prohibitedId: Number(prohibitedId), companyId: Number(companyId), typeProductId: Number(typeProductId), userId: user_id } });
        if (!insert_data)
            return response.json({ err: true, data: null, error: null, message: (0, message_1.ERROR_MESSAGE)() });
        await client_1.prisma.typeProduct.update({ where: { id: Number(typeProductId) }, data: { inventory: total } });
        const data_final = await (0, crud_1.EntradaProduto)({ quantidade: Number(quantity), role: "ENTRADA", user_id: user_id, typeProductId: Number(typeProductId) });
        if (!data_final)
            return response.json({ err: true, data: null, error: null, message: (0, message_1.ERROR_MESSAGE)() });
        return response.json({ err: false, data: { produto_quantidade, insert_data, data_final }, error: null, message: (0, message_1.SUCCESS_MESSAGE)() });
    }
    async update(request, response) { }
    async delete(request, response) { }
}
exports.default = new EntradaProdutoController();
