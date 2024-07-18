import prismaClient from "../../../prisma"



interface DeletarCategorias{
    remove:string
}




class DeletarCategoriasServicesAdm{

    async exDeletarCategoriaId({remove}:DeletarCategorias){
        await prismaClient.cadProdutos.deleteMany({
         where:{
            categoriaId:remove
         }
        })
        return {dados:"CategoriaId deletada com sucesso"}
    }


    async exDeletarCategoriasServicesAdm({remove}:DeletarCategorias){
    
    await prismaClient.cadCategoria.delete({
        where:{
            id:remove
        }
    })
    return {dados:"Categoria deletada com sucesso"}
}




}
export {DeletarCategoriasServicesAdm}