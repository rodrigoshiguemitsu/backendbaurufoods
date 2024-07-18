import prismaClient from "../../prisma";

interface verCategoria{
    categoriaId:string
}



class ListarProdutosServices{
    
    async exListarProdutosServices(){

        const ListarProdutosServices = await prismaClient.cadProdutos.findMany({
            include:{
                banners:true
            }
        })
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
                end_time:true,
                quantidade:true,
                desconto:true,
                precoAtual:true,
                preco:true,
                enderecoEmpresa:true,
                linkComoChegar:true,
                whatsappLoja:true,
                categoriaId:true,
                create_at:true,
                update_at:true,
                banners:{
                    select:{
                        id:true,
                    }
                }
            }
        })
        return (listarProdutosIdServices)
    }

}

export {ListarProdutosServices}