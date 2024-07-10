import prismaClient from "../../prisma";
import {hash} from "bcryptjs"

interface ServiceUsuario{
    nomeUsuario:string
    password:string

}


class UsuarioService{
    
    async exUsuarioService({nomeUsuario, password}:ServiceUsuario){
        
        if(!nomeUsuario || !password){
            throw new Error("Campos em brancos não são permitidos!")
        }
        const senhaCrypt = await hash(password, 8)
        
        const verUsuario = await prismaClient.administrador.findFirst({
            where:{
                nomeUsuario:nomeUsuario
            }
        })
        if (verUsuario){
            return("Usuario já esta cadastrado")
        }

        await prismaClient.administrador.create({
            data:{
                nomeUsuario:nomeUsuario,
                senha:senhaCrypt
            }
        })
        return {message:"Usuário criado com sucesso"}

    }
}
export{UsuarioService}