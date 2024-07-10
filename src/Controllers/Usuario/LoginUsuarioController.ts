import { Request,Response } from "express";
import { LoginUsuarioService } from "../../Services/Usuario/LoginUsuario";


class LoginUsuarioController{
    async handleLoginUsuarioAdmController(req:Request, res:Response){
       const { nomeUsuario,password}=req.body
    
       const loginUsuarioService = new LoginUsuarioService()
       const resLoginUsuario = await loginUsuarioService.exLoginUsuarioService({
        nomeUsuario,
        password
       })
       return res.json(resLoginUsuario)
    }
}
export {LoginUsuarioController}