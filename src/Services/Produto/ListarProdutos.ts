import prismaClient from "../../prisma";

interface verCategoria{
    categoriaId:string
}



class ListarProdutosServices{
    
    async exListarProdutosServices(){

        const ListarProdutosServices = await prismaClient.cadProdutos.findMany({})
        return (ListarProdutosServices)

    }

    async exListarProdutosIdServices({categoriaId}:verCategoria){
        const listarProdutosIdServices = await prismaClient.cadProdutos.findMany({
            where:{
                categoriaId:categoriaId
            },
            select:{
                nome:true,
                descricao:true,
                dataInicial:true,
                dataValidade:true,
                quantidade:true,
                concorrentePreco:true,
                preco:true,
                banner:true,
                categoriaId:true,
                create_at:true,
                update_at:true
            }
        })
        return (listarProdutosIdServices)
    }

}

export {ListarProdutosServices}