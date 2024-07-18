import prismaClient from "../../prisma";

interface ListarPag{
    id:string
}


class ListarClientePagServices{
    async executeLitarClientePagServices({id}:ListarPag){
        
        const respostaPagServices = await prismaClient.clientes.findUnique({
            where:{
                id:id
            },
            select:{
                id:true,
                nome:true,
                email:true,
                tipoDocumento:true,
                codigoIdCliente:true,
                cpf:true,
                ddd:true,
                whatsapp:true,
            }
        })
        return (respostaPagServices)
    }
}

export {ListarClientePagServices}