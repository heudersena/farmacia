import { prisma } from "../prisma/client";


interface IPropsEntradaProduto {
  user_id: number;
  quantidade: number;
  role: any;
  typeProductId: number;
  note?: string
}

const EntradaProduto = async ({ user_id,  quantidade, role, typeProductId, note }: IPropsEntradaProduto) => {
  try {
    const responseEntradaProduto = await prisma.report.create({data:{
        userId: user_id,
        typeProductId:typeProductId,
        role : role,
        quantity: quantidade,
        note:note
    }});
    return responseEntradaProduto;
  } catch (error) {
        return error;
  }

};

export { EntradaProduto };
