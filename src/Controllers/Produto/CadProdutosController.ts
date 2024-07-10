import { Request,Response } from "express";
import { CadProdutosServices } from "../../Services/Produto/CadProdutos";


class CadProdutosController{

    async handleCadProdutosController(req:Request, res:Response){
            const {nome,descricao,dataInicial,dataValidade,quantidade,concorrentePreco,preco,categoriaId}=req.body

            if (!req.file) {
                throw new Error("Problema na imagem")
            } else {
                const { originalname, filename: banner } = req.file
            
            
            const cadProdutosServices = new CadProdutosServices()
            const respostaProdutos = await cadProdutosServices.exCadProdutosServices({
                nome,
                descricao,
                dataInicial,
                dataValidade,
                quantidade,
                concorrentePreco,
                preco,
                banner,
                categoriaId
            })
            return res.json(respostaProdutos)
    }}

}
export {CadProdutosController}