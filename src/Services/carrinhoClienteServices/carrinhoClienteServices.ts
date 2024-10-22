import prismaClient from "../../prisma"

interface CriarCarrinhoCliente{
    nomeCliente:string
    produtoCar: any[]
    codUsuario:string
    valorTotal: number
}






class CarrinhoClienteServices{
   async exCarrinhoClienteServices({nomeCliente,produtoCar,codUsuario,valorTotal}:CriarCarrinhoCliente){
    
    const resCarrinhoClienteServices = await prismaClient.carrinhoCliente.create({
        data:{
            nomeCliente:nomeCliente,
            produtoCar:produtoCar,
            codUsuario:codUsuario,
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