import prismaClient from "../../prisma";



interface ListarUsuarioUnico{
    id:string
}

class ListarUsuarioUnicoServices{
    async exListarUsuarioUnicoServices({id}:ListarUsuarioUnico){
        if(!id){
            throw new Error("Usuário não encontrado!")
        }
        const resposta = await prismaClient.administrador.findUnique({
            where:{
                id:id
            },
            select:{
                id:true,
                nomeUsuario:true
            }
        })
        return (resposta)
    }
}
export {ListarUsuarioUnicoServices}