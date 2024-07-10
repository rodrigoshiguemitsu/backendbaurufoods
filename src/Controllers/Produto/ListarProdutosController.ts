import { Request,Response } from "express";
import { ListarProdutosServices } from "../../Services/Produto/ListarProdutos";


class ListarProdutosController{

    async handleListarProdutosController(req:Request, res:Response){
        
        const listarProdutosServices = new ListarProdutosServices()
        const resposListarProdutos = await listarProdutosServices.exListarProdutosServices()
        return res.json(resposListarProdutos)
    }


    async handleListarProdutosPets(req:Request,res:Response){
        
        const categoriaId = 'c934c59a-5e92-4bcf-a3ab-5dc145a556fa'

        const listarProdutosPetsServices = new ListarProdutosServices()
        const resListarProdutosPets = await listarProdutosPetsServices.exListarProdutosIdServices({
            categoriaId
        })
        return res.json(resListarProdutosPets)
    }

    async handleListarProdutosLanches(req:Request,res:Response){
        const categoriaId = 'ff1d524a-b5fd-4262-a0a7-4fa112667f31'

        const listarProdutosLanchesServices = new ListarProdutosServices()
        const resListarProdutosLanches = await listarProdutosLanchesServices.exListarProdutosIdServices({
            categoriaId
        })
        return res.json(resListarProdutosLanches)
    }

    async handleListarProdutosPizzas(req:Request, res:Response){
        const categoriaId = '93151094-ed2d-4ee3-b81a-4e74cb660fd7'

        const listarProdutosPizzas = new ListarProdutosServices()
        const resListarProdutosPizzas = await listarProdutosPizzas.exListarProdutosIdServices({
            categoriaId
        })
        return res.json (resListarProdutosPizzas)
    }

    async handleListarProdutosSobremesas(req:Request, res:Response){
        const categoriaId = '0e779053-d5dc-4fda-ac8f-275bdae2c55c'

        const listarProdutosSobremesas = new ListarProdutosServices()
        const resListarProdutosSobremesas = await listarProdutosSobremesas.exListarProdutosIdServices({
            categoriaId
        })
        return res.json(resListarProdutosSobremesas)
    }


    async handleListarProdutosPorcoes(req:Request,res:Response){
        const categoriaId = '4468aaaf-a747-4505-80e2-0bd5dcd452a2'

        const listarProdutosPorcoes = new ListarProdutosServices()
        const resListarProdutosPorcoes = await listarProdutosPorcoes.exListarProdutosIdServices({
            categoriaId
        })
        return res.json(resListarProdutosPorcoes)
    }

    

}

export {ListarProdutosController}