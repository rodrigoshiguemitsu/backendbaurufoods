import { Request,Response } from "express";
import { DeletarBannersAdmServices } from "../../../Services/Produto/DeletarProdutosAdm/DeletarBannerServicesAdm";




class DeletarBannersControllerAdm{
    async handleDeletarBannersControllerAdm(req:Request, res:Response){
        const {remove} = req.body
        
        
        const deletarBannersAdmServices = new DeletarBannersAdmServices
        const resDeleteBannerAdm = await deletarBannersAdmServices.exDeletarBannersAdm({
            remove
        })
        return res.json (resDeleteBannerAdm)
    }
}
export{DeletarBannersControllerAdm}