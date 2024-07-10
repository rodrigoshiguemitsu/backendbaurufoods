import prismaClient from "../../prisma"

interface CriarCarrinhoCliente{
    nomeCliente:string
    produtoCar: any[]
    valorTotal: number
}






class CarrinhoClienteServices{
   async exCarrinhoClienteServices({nomeCliente,produtoCar,valorTotal}:CriarCarrinhoCliente){
    
    const resCarrinhoClienteServices = await prismaClient.carrinhoCliente.create({
        data:{
            nomeCliente:nomeCliente,
            produtoCar:produtoCar,
            valorTotal:valorTotal
        }
    })
        return(resCarrinhoClienteServices)
   }

   async exListarCarrinhoCliente(){
    
        const ListarCarrinhoCliente = await prismaClient.carrinhoCliente.findMany({})
        return (ListarCarrinhoCliente)
    }

}
export {CarrinhoClienteServices}