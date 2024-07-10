import { Request, Response } from "express";
import { CadCliente } from "../../Services/Cliente/CadCliente";



class CadClienteController{

    async handleCadClienteController(req:Request, res:Response){
        const {nome,email,password,tipoDocumento,cpf,ddd,whatsapp,cep,endereco,numero,bairro,cidade,estado}=req.body
        
        const cadCliente = new CadCliente()
        const resposta = await cadCliente.exCadastroCliente({
            nome,
            email,
            password,
            tipoDocumento,
            cpf,
            ddd,
            whatsapp,
            cep,
            endereco,
            numero,
            bairro,
            cidade,
            estado
        })
        return res.json(resposta)
    }

}
export {CadClienteController}