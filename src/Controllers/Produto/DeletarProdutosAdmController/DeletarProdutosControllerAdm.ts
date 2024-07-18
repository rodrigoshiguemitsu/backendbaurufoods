import { Request, Response } from "express";
import { DeletarProdutosServicesAdm } from "../../../Services/Produto/DeletarProdutosAdm/DeletarProdutoServicesAdm";



class DeletarProdutosControllerAdm{

async handleDeletarProdutosControllerAdm(req:Request,res:Response){
    const {remove} = req.body

    const deletarProdutosServicesAdm = new DeletarProdutosServicesAdm()
    const resDeletarProdutosAdm = await deletarProdutosServicesAdm.exDeletarProdutosServicesAdm({
        remove
    })
    
    return res.json(resDeletarProdutosAdm)
}

}

export {DeletarProdutosControllerAdm}