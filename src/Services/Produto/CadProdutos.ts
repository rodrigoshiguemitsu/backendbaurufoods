import prismaClient from "../../prisma";

interface ProdutosServices{
    nome: string
    descricao: string
    dataInicial: string
    dataValidade: string
    quantidade: string
    concorrentePreco: string
    preco: string
    banner: string
    categoriaId: string
}

class CadProdutosServices{
    async exCadProdutosServices({nome,descricao,dataInicial,dataValidade,quantidade,concorrentePreco,preco,banner,categoriaId}:ProdutosServices){
        try {
            const resProdutosServices = await prismaClient.cadProdutos.create({
                data:{
                    nome:nome,
                    descricao:descricao,
                    dataInicial:dataInicial,
                    dataValidade:dataValidade,
                    quantidade:quantidade,
                    concorrentePreco:concorrentePreco,
                    preco:preco,
                    banner:banner,
                    categoriaId:categoriaId

                }
            })
            console.log("Produto cadastrado com sucesso",resProdutosServices)
            return{dados:"Produto cadastrado com sucesso"}
        } catch (error) {
            console.error("não foi possivel cadastrar o produto", error)
            return {error:`Erro ao cadastrar produto ${error.message}`}
        }
    
}
}
export{CadProdutosServices}

