import prismaClient from "../../../prisma"


interface DeletarBanners{
    remove:string
}



class DeletarBannersAdmServices{
    
    async exDeletarBannersAdm({remove}:DeletarBanners){
        await prismaClient.banner.deleteMany({
            where: {
                produtoId:remove
            }
        })
        return {dados:'Banners deletados com sucesso'}
    }


}
export {DeletarBannersAdmServices}