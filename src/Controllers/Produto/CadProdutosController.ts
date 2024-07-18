import { Request,Response } from "express";
import { CadProdutosServices } from "../../Services/Produto/CadProdutos";


class CadProdutosController{

    async handleCadProdutosController(req:Request, res:Response){
            const {nome,descricao,dataInicial,dataValidade,end_time,quantidade,desconto,precoAtual,preco,categoriaId,enderecoEmpresa,linkComoChegar,whatsappLoja}=req.body


            

            if (!req.files || !req.files['file1'] || !req.files['file2']) {
                throw new Error("Problema na imagem")
            } else {

                const file1 = req.files['file1'][0]
                const file2 = req.files['file2'][0]

                const { originalname: originalname1, filename: banner1 } = file1
                const { originalname: originalname2, filename: banner2 } = file2
            
            
            const cadProdutosServices = new CadProdutosServices()
            
            const precoAtualFix = parseFloat(precoAtual).toFixed(2)
            const precoFix = parseFloat(preco).toFixed(2)

            const respostaProdutos = await cadProdutosServices.exCadProdutosServices({

                nome,
                descricao,
                dataInicial,
                dataValidade,
                end_time,
                quantidade,
                desconto,
                precoAtualFix,
                precoFix,
                banners:[banner1,banner2],
                enderecoEmpresa,
                linkComoChegar,
                whatsappLoja,
                categoriaId
            
            })
            return res.json(respostaProdutos)
    }}

}
export {CadProdutosController}