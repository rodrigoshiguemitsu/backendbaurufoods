import prismaClient from "../../prisma";

interface ClienteToken{
    id:string
}

class ListarClienteTokenServices{
async executeClienteToken({id}:ClienteToken){
    if(!id){
        throw new Error("Usuário não encontrado")
    }
    const resposta = await prismaClient.clientes.findUnique({
        where:{
            id:id
        },
        select:{
            id:true,
            email:true,
        }
    })
    return (resposta)
}

}

export {ListarClienteTokenServices}