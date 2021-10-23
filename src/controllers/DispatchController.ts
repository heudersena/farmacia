

import { Request, Response } from "express";
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
  ERROR_NULL,
  CUSTOM_MESSAGE,
} from "../config/message";
import { prisma } from "../prisma/client";
import { EntradaProduto } from "../services/crud";

class DispatchController {
  async index(request: Request, response: Response) { }
  async getById(request: Request, response: Response) { }
  async store(request: Request, response: Response) {

    const { quantity, exitId, typeProductId } = request.body;

    const user_id = request.userId;

    try {
      const produto_quantidade = await prisma.typeProduct.findFirst({ where: { id: Number(typeProductId) }, select: { inventory: true } })
      if (produto_quantidade?.inventory < Number(quantity)) return response.json({ err: true, data: null, error: null, message: CUSTOM_MESSAGE("A QUANTIDADE SOLICITADA É MAIOR DO QUE TEM NO ESTOQUE.") });
      const total = produto_quantidade?.inventory - Number(quantity);
      if (!produto_quantidade) return response.json({ err: true, data: null, error: null, message: ERROR_NULL() });
      const insert_data = await prisma.dispatch.create({ data: { quantity: Number(quantity), typeProductId: Number(typeProductId), userId: Number(user_id), exitId: Number(exitId) } });

      if (!insert_data) return response.json({ err: true, data: null, error: null, message: ERROR_MESSAGE() });

      const update_categoria_produto = await prisma.typeProduct.update({ where: { id: Number(typeProductId) }, data: { inventory: total } });
      if (!update_categoria_produto) return response.json({ err: true, data: null, error: null, message: CUSTOM_MESSAGE("NÃO FOI POSSÍVEL ATUALIZAR A CATEGORIA DESSE PRODUTO.") });

      const data_final = await EntradaProduto({ quantidade: quantity, role: "SAIDA", user_id: user_id, typeProductId: typeProductId })
      if (!data_final) return response.json({ err: true, data: null, error: null, message: CUSTOM_MESSAGE("NÃO FOI POSSÍVEL ATUALIZAR A TABELA DE HISTÓRICO DESSE PRODUTO.") });

      //  Sucesso em todas as inserções no banco de dados.
      return response.json({ err: false, data: { produto_quantidade, insert_data, update_categoria_produto, data_final }, error: null, message: SUCCESS_MESSAGE() });


    } catch (error) {
      response.json({ err: true, data: null, error: error.message, message: ERROR_MESSAGE() });
    }


  }
  async update(request: Request, response: Response) { }
  async delete(request: Request, response: Response) { }
}

export default new DispatchController();
