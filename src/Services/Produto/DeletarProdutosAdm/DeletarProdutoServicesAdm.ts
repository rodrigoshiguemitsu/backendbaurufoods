import prismaClient from "../../../prisma"


interface DeletarProdutos{
    remove:string
}



class DeletarProdutosServicesAdm{

async exDeletarProdutosServicesAdm({remove}:DeletarProdutos){

    await prismaClient.cadProdutos.delete({
        where:{
            id:remove
        }
    })
    return {dados:"Promoção deletada com sucesso"}
}


}


export {DeletarProdutosServicesAdm}