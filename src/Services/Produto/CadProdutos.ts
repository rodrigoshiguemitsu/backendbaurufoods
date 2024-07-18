import prismaClient from "../../prisma";

interface ProdutosServices{
    nome: string
    descricao: string
    dataInicial: string
    dataValidade: string
    end_time: string
    quantidade: string
    desconto:string
    precoAtualFix: string
    precoFix: string
    banners: string[]
    enderecoEmpresa: string
    linkComoChegar:string
    whatsappLoja:string
    categoriaId: string
}

class CadProdutosServices{
    async exCadProdutosServices(data: ProdutosServices){
        try {
            const {nome,descricao,dataInicial,dataValidade,end_time,quantidade,desconto,precoAtualFix,precoFix,banners,enderecoEmpresa,linkComoChegar,whatsappLoja,categoriaId } = data

            const resProdutosServices = await prismaClient.cadProdutos.create({
                data:{
                    nome:nome,
                    descricao:descricao,
                    dataInicial:dataInicial,
                    dataValidade:dataValidade,
                    end_time: new Date(end_time),
                    quantidade:quantidade,
                    desconto:desconto,
                    precoAtual:precoAtualFix,
                    preco:precoFix,
                    enderecoEmpresa:enderecoEmpresa,
                    linkComoChegar:linkComoChegar,
                    whatsappLoja:whatsappLoja,
                    categoriaId:categoriaId,
                    banners: {
                        create:banners.map(banner=>({
                            url:banner,
                        }))
                    },
                },
                include:{
                    banners:true
                }
                
            })
            // console.log("Produto cadastrado com sucesso",resProdutosServices)
            return{dados:"Produto cadastrado com sucesso"}
        } catch (error) {
            // console.error("não foi possivel cadastrar o produto", error)
            return {error:`Erro ao cadastrar produto ${error.message}`}
        }
    
}
}
export{CadProdutosServices}

