import { Request,Response } from "express";
import { ListarProdutosServices } from "../../Services/Produto/ListarProdutos";


class ListarProdutosController{

    async handleListarProdutosController(req:Request, res:Response){
        
        const listarProdutosServices = new ListarProdutosServices()
        const resposListarProdutos = await listarProdutosServices.exListarProdutosServices()
        return res.json(resposListarProdutos)
    }


    async handleListarProdutosPets(req:Request,res:Response){
        
        const categoriaId = '5dd83185-63fd-4a45-bd67-c294d296326b'

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
        const categoriaId = '3b1e9770-ae85-49a9-a693-71f610ea2d22'

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
        const categoriaId = '234b1166-5deb-48b4-a8f7-1b131e374f6b'

        const listarProdutosPorcoes = new ListarProdutosServices()
        const resListarProdutosPorcoes = await listarProdutosPorcoes.exListarProdutosIdServices({
            categoriaId
        })
        return res.json(resListarProdutosPorcoes)
    }

    

}

export {ListarProdutosController}