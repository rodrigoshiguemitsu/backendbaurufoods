import { Request,Response } from "express";
import { ListarClienteTokenServices } from "../../Services/Cliente/ListarCLienteTokenServices";


class ListarClienteToken{
    async handleListarClienteToken(req:Request,res:Response){
        const id = req.user_id

        const listarClienteTokenServices = new ListarClienteTokenServices()
        const resposta = await listarClienteTokenServices.executeClienteToken({
            id
        })
        return res.json(resposta)
    }
}

export {ListarClienteToken}