"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../config/message");
const client_1 = require("../prisma/client");
const crud_1 = require("../services/crud");
class DispatchController {
    async index(request, response) { }
    async getById(request, response) { }
    async store(request, response) {
        const { quantity, exitId, typeProductId } = request.body;
        const user_id = request.userId.id;
        try {
            const produto_quantidade = await client_1.prisma.typeProduct.findFirst({ where: { id: Number(typeProductId) }, select: { inventory: true } });
            if ((produto_quantidade === null || produto_quantidade === void 0 ? void 0 : produto_quantidade.inventory) < Number(quantity))
                return response.json({ err: true, data: null, error: null, message: (0, message_1.CUSTOM_MESSAGE)("A QUANTIDADE SOLICITADA É MAIOR DO QUE TEM NO ESTOQUE.") });
            const total = (produto_quantidade === null || produto_quantidade === void 0 ? void 0 : produto_quantidade.inventory) - Number(quantity);
            if (!produto_quantidade)
                return response.json({ err: true, data: null, error: null, message: (0, message_1.ERROR_NULL)() });
            const insert_data = await client_1.prisma.dispatch.create({ data: { quantity: Number(quantity), typeProductId: Number(typeProductId), userId: Number(user_id), exitId: Number(exitId) } });
            if (!insert_data)
                return response.json({ err: true, data: null, error: null, message: (0, message_1.ERROR_MESSAGE)() });
            const update_categoria_produto = await client_1.prisma.typeProduct.update({ where: { id: Number(typeProductId) }, data: { inventory: total } });
            if (!update_categoria_produto)
                return response.json({ err: true, data: null, error: null, message: (0, message_1.CUSTOM_MESSAGE)("NÃO FOI POSSÍVEL ATUALIZAR A CATEGORIA DESSE PRODUTO.") });
            const data_final = await (0, crud_1.EntradaProduto)({ quantidade: quantity, role: "SAIDA", user_id: user_id, typeProductId: typeProductId });
            if (!data_final)
                return response.json({ err: true, data: null, error: null, message: (0, message_1.CUSTOM_MESSAGE)("NÃO FOI POSSÍVEL ATUALIZAR A TABELA DE HISTÓRICO DESSE PRODUTO.") });
            return response.json({ err: false, data: { produto_quantidade, insert_data, update_categoria_produto, data_final }, error: null, message: (0, message_1.SUCCESS_MESSAGE)() });
        }
        catch (error) {
            response.json({ err: true, data: null, error: error.message, message: (0, message_1.ERROR_MESSAGE)() });
        }
    }
    async update(request, response) { }
    async delete(request, response) { }
}
exports.default = new DispatchController();
