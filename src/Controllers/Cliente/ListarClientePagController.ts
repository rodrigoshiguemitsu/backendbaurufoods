import { Request,Response } from "express";
import { ListarClientePagServices } from "../../Services/Cliente/ListarClientePagServices";



class ListarClientePagController{
    async handleListaClientePagController(req:Request,res:Response){
        const id = req.user_id
        
        const listarClientePagServices = new ListarClientePagServices()
        const respostaPagController = await listarClientePagServices.executeLitarClientePagServices({
            id
        })
        return res.json(respostaPagController)
    }
}

export {ListarClientePagController}