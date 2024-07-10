import { Request,Response } from "express";
import { UsuarioService } from "../../Services/Usuario/UsuarioService";



class CriarUsuarioController{
    async handleCriarUsuario(req:Request, res:Response){
        const {nomeUsuario, password}=req.body
        
        const usuarioService = new UsuarioService()
        const resUsuario = await usuarioService.exUsuarioService({
            nomeUsuario,
            password
        })
        return res.json(resUsuario)
    }
}
export{CriarUsuarioController}