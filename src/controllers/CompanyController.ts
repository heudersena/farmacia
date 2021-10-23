import { Request, Response } from "express";
import { gerarLote } from "../config/helper";
type IProps = {
    message: string
}
import { ERROR_MESSAGE, SUCCESS_MESSAGE, ERROR_NULL, CUSTOM_MESSAGE } from "../config/message";
import { prisma } from "../prisma/client"

class CompanyController {

    async index(request: Request, response: Response) {
        try {
            const company = await prisma.company.findMany();
            response.json({ err: false, data: company, error: null, message: SUCCESS_MESSAGE() })
        } catch (error) {
            response.json({ err: true, data: null, error: null, message: ERROR_MESSAGE() });
        }
    }

    async getById(request: Request, response: Response) {
        const { id } = request.params
        try {
            const company = await prisma.company.findFirst({ where: { id: Number(id) } });

            if (!company) response.json({ err: true, data: null, error: null, message: ERROR_NULL() });
            response.json({ err: false, data: company, error: null, message: SUCCESS_MESSAGE() })



        } catch (error) {

        }
    }

    async store(request: Request, response: Response) {
        const { register, name, address, number_phone } = request.body;

        if(register === '' || name === '' || address === '' || number_phone === '') {     
                               
            return  response.json({ err: true, data: null, error: null, message: CUSTOM_MESSAGE("OLHA! PREENCHA TODOS OS CAMPOS QUE SÃO OBRIGATÓRIOS") }); 
        }
        

        try {
            const company = await prisma.company.create({
                data: {
                    register, name, address, number_phone
                }
            });
            response.json({ err: false, data: company, error: null, message: SUCCESS_MESSAGE() })
        } catch (error) {
            response.json({ err: true, data: null, error: error.message, message: ERROR_MESSAGE() });
        }
    }

    async update(request: Request, response: Response) {

        const { id } = request.params;
        const { register, name, address, number_phone, isActive } = request.body;
        try {
            const company = await prisma.company.findFirst({ where: { id: Number(id) } });

            if (!company) response.json({ err: true, data: null, error: null, message: ERROR_NULL() });

            const company_update = await prisma.company.update({
                where: { id: Number(id) }, data: {
                    register, name, address, number_phone, isActive: Boolean(isActive)
                }
            })

            response.json({ err: false, data: company_update, error: null, message: SUCCESS_MESSAGE() })



        } catch (error) {

        }

    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        try {
            const company = await prisma.company.delete({ where: { id: Number(id) } })
            response.json({ err: false, data: company, error: null, message: CUSTOM_MESSAGE(`REGISTRO ${company.register} DELETADO COM SUCESSO!`) })

        } catch (error) {
            response.json({ err: true, data: null, error: error.message, message: ERROR_MESSAGE() })
        }
    }


}

export default new CompanyController();