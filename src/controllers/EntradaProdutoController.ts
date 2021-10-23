import { Request, Response } from "express";
import { EntradaProduto } from "../services/crud";
import { gerarLote } from "../config/helper";
import {
    ERROR_MESSAGE,
    SUCCESS_MESSAGE,
    ERROR_NULL,
    CUSTOM_MESSAGE,
} from "../config/message";
import { prisma } from "../prisma/client";

class EntradaProdutoController {
    async index(request: Request, response: Response) {
        try {
            const response_data = await prisma.product.findMany({ include: { Company: true, Prohibited: true, TypeProduct: true } });
            response.json({ err: false, data: response_data, error: null, message: SUCCESS_MESSAGE() })
        } catch (error) {
            response.json({ err: true, data: null, error: error.message, message: ERROR_NULL() });
        }
    }
    async getById(request: Request, response: Response) { }

    async store(request: Request, response: Response) {
        const { nfe, expires, quantity, prohibitedId, companyId, typeProductId } = request.body;
        const user_id = request.userId;
        const code_unique = gerarLote();

        if (expires === "" || quantity === "" || prohibitedId === "" || companyId === "" || typeProductId === "") 
        {
            return response.json({ err: true, data: null, error: null, message: CUSTOM_MESSAGE("OLHA! PREENCHA TODOS OS CAMPOS QUE SÃO OBRIGATÓRIOS") });            
        }
        
        const produto_quantidade = await prisma.typeProduct.findFirst({ where: { id: Number(typeProductId) }, select: { inventory: true } })
        const total = Number(quantity) + produto_quantidade?.inventory;
        
        if (!produto_quantidade) return response.json({ err: true, data: null, error: null, message: ERROR_NULL() });
        const insert_data = await prisma.product.create({data: { nfe: nfe, expires: expires,code_unique: code_unique,quantity: Number(total),prohibitedId: Number(prohibitedId),companyId: Number(companyId), typeProductId: Number(typeProductId),userId: user_id }})

        if (!insert_data) return response.json({ err: true, data: null, error: null, message: ERROR_MESSAGE() });
        await prisma.typeProduct.update({ where: { id: Number(typeProductId) }, data: { inventory: total } });

        const data_final = await EntradaProduto({ quantidade: Number(quantity), role: "ENTRADA", user_id: user_id, typeProductId: Number(typeProductId) })


        if (!data_final) return response.json({ err: true, data: null, error: null, message: ERROR_MESSAGE() });
        return response.json({ err: false, data: { produto_quantidade, insert_data, data_final }, error: null, message: SUCCESS_MESSAGE() })
    }
    async update(request: Request, response: Response) { }
    async delete(request: Request, response: Response) { }
}

export default new EntradaProdutoController();
