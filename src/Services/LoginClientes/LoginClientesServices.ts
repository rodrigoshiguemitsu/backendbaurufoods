import { sign } from 'jsonwebtoken';
import prismaClient from '../../prisma';
import {compare} from 'bcryptjs'

interface LoginCliente{
    email:string
    password:string
}

class LoginClientesServices{
    async executeLoginClientes({email,password}:LoginCliente){
       
        const usuarioClientes = await prismaClient.clientes.findFirst({
            where:{
                email:email
            }
        })
        if(!usuarioClientes){
            throw new Error ("Usuario/Senha incorretos")
        }
        const autenticado = await compare(password, usuarioClientes.senha)

        if(!autenticado){
            throw new Error ("Usuario/Senha incorretos")
        }

        const token = sign({
            id:usuarioClientes.id,
            email:usuarioClientes.email
        },
        process.env.JWT_SECRET,{
            subject:usuarioClientes.id,
            expiresIn:"2h"
        })

        return{
            id:usuarioClientes.id,
            email:usuarioClientes.email,
            token:token
        }
    }
}

export{LoginClientesServices}