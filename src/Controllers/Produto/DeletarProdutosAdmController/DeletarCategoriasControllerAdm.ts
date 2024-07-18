import { Request,Response } from "express";
import { DeletarCategoriasServicesAdm } from "../../../Services/Produto/DeletarProdutosAdm/DeletarCategoriasServices";




class DeletarCategoriasControllerAdm{

async handleDeletarCategoriaIdAdm(req:Request, res:Response){
    const {remove} = req.body
    
    const deletarCategoriaId = new DeletarCategoriasServicesAdm()
    const resDeletarCategoriaId = await deletarCategoriaId.exDeletarCategoriaId({
        remove
    })
    return res.json(resDeletarCategoriaId)
}

async handleDeletarCategoriasControllerAdm(req:Request,res:Response){
    const {remove} = req.body

    const deletarCategoriasAdmServices = new DeletarCategoriasServicesAdm()
    const resDeletarCategorias = await deletarCategoriasAdmServices.exDeletarCategoriasServicesAdm({
        remove
    })
    return res.json(resDeletarCategorias)
}



}
export {DeletarCategoriasControllerAdm}
