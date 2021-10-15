import { Request, Response } from "express";

import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
  ERROR_NULL,
  CUSTOM_MESSAGE,
} from "../config/message";
import { prisma } from "../prisma/client";

interface IPropsRequest {
  userId: {
    user: { username: string; role: string; id: number };
  };
}

class TypeProductController {
  async index(request: Request, response: Response) {
    try {
      const data = request.userId;

      const product_type = await prisma.typeProduct.findMany();
      response.json({
        err: false,
        data: product_type,
        error: null,
        message: SUCCESS_MESSAGE(),
      });
    } catch (error) {
      response.json({
        err: true,
        data: null,
        error: error,
        message: ERROR_MESSAGE(),
      });
    }
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const product_type = await prisma.typeProduct.findFirst({
        where: { id: Number(id) },
      });
      if (!product_type)
        response.json({
          err: true,
          data: null,
          error: null,
          message: ERROR_NULL(),
        });
      response.json({
        err: false,
        data: product_type,
        error: null,
        message: SUCCESS_MESSAGE(),
      });
    } catch (error) {
      response.json({
        err: true,
        data: null,
        error: error,
        message: ERROR_MESSAGE(),
      });
    }
  }

  async store(request: Request, response: Response) {
    const { name } = request.body;
    try {
      const product_type = await prisma.typeProduct.create({
        data: { name, inventory: 0 },
      });

      response.json({
        err: false,
        data: product_type,
        error: null,
        message: SUCCESS_MESSAGE(),
      });
    } catch (error) {
      response.json({
        err: true,
        data: null,
        error: error,
        message: ERROR_MESSAGE(),
      });
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, isActive, inventory } = request.body;
    try {
      const product_type = await prisma.typeProduct.update({
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
        message: SUCCESS_MESSAGE(),
      });
    } catch (error) {
      response.json({
        err: true,
        data: null,
        error: error.message,
        message: ERROR_MESSAGE(),
      });
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const product_type = await prisma.typeProduct.delete({
        where: { id: Number(id) },
      });
      response.json({
        err: false,
        data: product_type,
        error: null,
        message: SUCCESS_MESSAGE(),
      });
    } catch (error) {
      response.json({
        err: true,
        data: null,
        error: error.message,
        message: ERROR_MESSAGE(),
      });
    }
  }
}
export default new TypeProductController();
