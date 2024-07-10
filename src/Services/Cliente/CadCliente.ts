import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'

interface CadastroCliente{
    nome:string
    email:string
    password:string
    tipoDocumento:string
    cpf:string
    ddd:string
    whatsapp:string
    cep:string
    endereco:string
    numero:string
    bairro:string
    cidade:string
    estado:string
}
class CadCliente{

    async exCadastroCliente({nome,email,password,tipoDocumento,cpf,ddd,whatsapp,cep,endereco,numero,bairro,cidade,estado}:CadastroCliente){
        
       
            const senhaCrypt = await hash(password, 8)

            const verCpfEmail = await prismaClient.clientes.findFirst({
                where:{
                    cpf:cpf,
                    email:email
                }
            })
            if(verCpfEmail){
                throw new Error ('Cliente já cadastrado!')
            }
            

            await prismaClient.clientes.create({
                data: {
                    nome:nome,
                    email:email,
                    senha:senhaCrypt,
                    tipoDocumento:tipoDocumento,
                    cpf:cpf,
                    ddd:ddd,
                    whatsapp:whatsapp,
                    cep:cep,
                    endereco:endereco,
                    numero:numero,
                    bairro:bairro,
                    cidade:cidade,
                    estado:estado
                }
                
            })
            
            return {dados:"Cliente cadastrado com sucesso"}
        
    }

}
export {CadCliente}

