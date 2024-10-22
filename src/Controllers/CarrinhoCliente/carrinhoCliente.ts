import { Request,Response } from "express"
import { CarrinhoClienteServices } from "../../Services/carrinhoClienteServices/carrinhoClienteServices"






class CarrinhoClienteController{
    async handlePedidoClienteController(req:Request,res:Response){
        const {nomeCliente,produtoCar,codUsuario,valorTotal } = req.body

        const carrinhoClienteServices = new CarrinhoClienteServices()
        const respostaCarrinhoController = await carrinhoClienteServices.exCarrinhoClienteServices({
            nomeCliente,
            produtoCar,
            codUsuario,
            valorTotal
        })
        return res.json(respostaCarrinhoController)
    }

    async handleListarCarrinhoCliente(req:Request, res:Response){

        const listarCarrinhoClienteServices = new CarrinhoClienteServices()
        const resListarCarrinhoCliente = await listarCarrinhoClienteServices.exListarCarrinhoCliente()
        return res.json(resListarCarrinhoCliente)

    }


}
export { CarrinhoClienteController}