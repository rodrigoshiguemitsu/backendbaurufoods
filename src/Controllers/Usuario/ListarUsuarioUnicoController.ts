import { Request, Response } from "express";
import { ListarUsuarioUnicoServices } from "../../Services/Usuario/ListarUsuarioUnico";


class ListarUsuarioUnicoController{
    async handleListarUsuarioUnicoController(req:Request, res:Response){
        const id = req.user_id
        
        const listarUsuarioUnico = new ListarUsuarioUnicoServices()
        const resposta = await listarUsuarioUnico.exListarUsuarioUnicoServices({
            id
        })
        return res.json(resposta)
    }
}

export{ListarUsuarioUnicoController}