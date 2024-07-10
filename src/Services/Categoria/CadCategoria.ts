import prismaClient from "../../prisma";

interface CadCategoria{
    nomeCategoria: string
    banner:string
}


class CadCategoriaServices{
    async exCadCategoria({nomeCategoria,banner}:CadCategoria){
        
        try {
            const respostaCategoriaServices = await prismaClient.cadCategoria.create({
                data:{
                    nomeCategoria:nomeCategoria,
                    banner:banner
                }
            })
            console.log("Categoria cadastrada com sucesso", respostaCategoriaServices)
            return {dados:"Categoria cadastrada com sucesso"}
        } catch (error) {
            console.error("Não conseguimos cadastrar a categoria",error)
            return {error:`Erro ao cadastrar categopria:${error.message}`}
        }
    }
}
export {CadCategoriaServices}