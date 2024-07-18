import {Router} from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

import { isAuth } from './Middleware/isAuth'

export const rotas = Router()
const upload = multer(uploadConfig.upload('./tmp'))
import { CadClienteController } from './Controllers/Cliente/CadClienteController'
import { CadCategoriaController } from './Controllers/Categoria/CadCategoriaController'
import { CadProdutosController } from './Controllers/Produto/CadProdutosController'
import { CriarUsuarioController } from './Controllers/Usuario/UsuarioController'
import { LoginUsuarioController } from './Controllers/Usuario/LoginUsuarioController'
import { ListarUsuarioUnicoController } from './Controllers/Usuario/ListarUsuarioUnicoController'
import { ListarCategoriaController } from './Controllers/Categoria/ListarCategoriaController'
import { ListarProdutosController } from './Controllers/Produto/ListarProdutosController'
import { ListarClienteToken } from './Controllers/Cliente/ListarClientetoken'
import { LoginClientesController } from './Controllers/LoginClientesController/LoginClientesController'
import { GeneratePaymentLink } from './Controllers/pagamentos/pagamentos'
import { ListarClientePagController } from './Controllers/Cliente/ListarClientePagController'
import { CarrinhoClienteController } from './Controllers/CarrinhoCliente/carrinhoCliente'
import { DeletarBannersControllerAdm } from './Controllers/Produto/DeletarProdutosAdmController/DeletarBannersController'
import { DeletarProdutosControllerAdm } from './Controllers/Produto/DeletarProdutosAdmController/DeletarProdutosControllerAdm'
import { DeletarCategoriasControllerAdm } from './Controllers/Produto/DeletarProdutosAdmController/DeletarCategoriasControllerAdm'







rotas.post("/CadCategoria",isAuth,upload.single('file'), new CadCategoriaController().handleCadCategoriaController) 
rotas.post("/CadProdutos",isAuth,upload.fields([{name:'file1'}, {name:'file2'}]), new CadProdutosController().handleCadProdutosController)


//Pagamentos
rotas.post('/Pagamentos', new GeneratePaymentLink().handlePagamentosController)




//Clientes
rotas.post("/CriarClientes", new CadClienteController().handleCadClienteController)
rotas.get("/ListarClienteToken",isAuth, new ListarClienteToken().handleListarClienteToken)
rotas.get("/ClientePagController",isAuth, new ListarClientePagController().handleListaClientePagController)
rotas.get('/ListarCarrinhoCliente', new CarrinhoClienteController().handleListarCarrinhoCliente)
rotas.post("/LoginController", new LoginClientesController().handleLoginClientesController)
rotas.post("/CarrinhoCliente", new CarrinhoClienteController().handlePedidoClienteController)



//UsuarioAdm
rotas.post("/CriarUsuario", new CriarUsuarioController().handleCriarUsuario)
rotas.post("/LoginUsuarioAdm", new LoginUsuarioController().handleLoginUsuarioAdmController)
rotas.get("/ListarUsuarioAdm",isAuth, new ListarUsuarioUnicoController().handleListarUsuarioUnicoController)
rotas.delete("/DeletarBannersAdm",isAuth,new DeletarBannersControllerAdm().handleDeletarBannersControllerAdm)
rotas.delete("/DeletarProdutosAdm",isAuth,new DeletarProdutosControllerAdm().handleDeletarProdutosControllerAdm)
rotas.delete("/DeletarCategoriaId",isAuth,new DeletarCategoriasControllerAdm().handleDeletarCategoriaIdAdm)
rotas.delete("/DeletarCategoria",isAuth,new DeletarCategoriasControllerAdm().handleDeletarCategoriasControllerAdm)


rotas.get("/ListarCategoria/files",isAuth,new ListarCategoriaController().handleListarCategoriaController)
rotas.get("/ListarProdutos/files",isAuth, new ListarProdutosController().handleListarProdutosController)   
rotas.get("/ListarPets/files", new ListarProdutosController().handleListarProdutosPets)
rotas.get("/ListarLanches/files", new ListarProdutosController().handleListarProdutosLanches)
rotas.get("/ListarPizzas/files", new ListarProdutosController().handleListarProdutosPizzas)
rotas.get("/ListarSobremesas/files", new ListarProdutosController().handleListarProdutosSobremesas)
rotas.get("/ListarPorcoes/files", new ListarProdutosController().handleListarProdutosPorcoes)