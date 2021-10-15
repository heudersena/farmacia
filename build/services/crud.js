"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntradaProduto = void 0;
const client_1 = require("../prisma/client");
const EntradaProduto = async ({ user_id, quantidade, role, typeProductId, note }) => {
    try {
        const responseEntradaProduto = await client_1.prisma.report.create({
            data: {
                userId: user_id,
                typeProductId: typeProductId,
                role: role,
                quantity: quantidade,
                note: note
            }
        });
        return responseEntradaProduto;
    }
    catch (error) {
        return error;
    }
};
exports.EntradaProduto = EntradaProduto;
