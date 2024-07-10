import prismaClient from "../../prisma"



class ListarCategoriaServices{
    async exListarCategoriaServices(){
        const ListarCategoria = await prismaClient.cadCategoria.findMany({})
        return (ListarCategoria)
    }
}
export{ListarCategoriaServices}