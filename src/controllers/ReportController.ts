import { Request, Response } from "express";
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
  ERROR_NULL,
  CUSTOM_MESSAGE,
} from "../config/message";
import { prisma } from "../prisma/client";

class ReportController {
  async index(request: Request, response: Response) {
      try {
        const relatorio = await prisma.report.findMany({orderBy:{id: "desc"},include:{ TypeProduct:true} })
        response.json({ err: false, data: relatorio, error: null, message: SUCCESS_MESSAGE() })
      } catch (error) {
          response.json({ err: true, data: null, error: null, message: ERROR_MESSAGE() });
      }
  }
  async getById(request: Request, response: Response) {}
  async store(request: Request, response: Response) {}
  async update(request: Request, response: Response) {}
  async delete(request: Request, response: Response) {}
}

export default new ReportController();
