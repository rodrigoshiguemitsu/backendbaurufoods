import { Request,Response } from "express";
import { LoginClientesServices } from "../../Services/LoginClientes/LoginClientesServices";



class LoginClientesController{
    async handleLoginClientesController(req:Request, res:Response){
        const { email, password}=req.body
        

        const loginClientesServices= new LoginClientesServices()
        const resposta = await loginClientesServices.executeLoginClientes({
            email,
            password
        })
        return res.json(resposta)
    }
}
export {LoginClientesController}