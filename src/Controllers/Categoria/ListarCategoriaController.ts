import { Request,Response } from "express";
import { ListarCategoriaServices } from "../../Services/Categoria/ListarCategoria";


class ListarCategoriaController{

    async handleListarCategoriaController(req:Request,res:Response){
        const listarCategoriaServices = new ListarCategoriaServices()
        const resposta =await listarCategoriaServices.exListarCategoriaServices()
        return res.json(resposta)
    }
}
export {ListarCategoriaController}