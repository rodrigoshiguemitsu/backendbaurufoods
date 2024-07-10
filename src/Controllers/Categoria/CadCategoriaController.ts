import { Request,Response } from "express";
import { CadCategoriaServices } from "../../Services/Categoria/CadCategoria";


class CadCategoriaController{
    
    async handleCadCategoriaController(req:Request,res:Response){
        const {nomeCategoria} = req.body

        if(!req.file){
            throw new Error("Problema na imagem")
        }else{
            const {originalname, filename:banner} = req.file
            
            const cadCategoriaServices = new CadCategoriaServices()
            const respostaCategoria = await cadCategoriaServices.exCadCategoria({
                nomeCategoria,
                banner
            })
            return res.json(respostaCategoria)
        }
    }
}
export {CadCategoriaController}