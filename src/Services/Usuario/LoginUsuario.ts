import prismaClient from "../../prisma";
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

interface LoginUsuario{
    nomeUsuario:string
    password:string
}


class LoginUsuarioService{
    async exLoginUsuarioService({nomeUsuario,password}:LoginUsuario){
        
        const verNomeUsuario = await prismaClient.administrador.findFirst({
            where:{
                nomeUsuario:nomeUsuario
            }
        })
        if(!verNomeUsuario){
            throw new Error("Nome/Senha incorretos")
        }
        
        const autenticado = await compare(password, verNomeUsuario.senha)
        
        if(!autenticado){
            throw new Error("Nome/Senha incorretos")
        }
        const token = sign(
            {
            id:verNomeUsuario.id,
            nomeUsuario: verNomeUsuario.nomeUsuario
            },
            process.env.JWT_SECRET,{
                subject:verNomeUsuario.id,
                expiresIn:'3h'
            }
    
    )
    return{
        id:verNomeUsuario.id,
        nomeUsuario:verNomeUsuario.nomeUsuario,
        token:token
    }


    }
}
export {LoginUsuarioService}


