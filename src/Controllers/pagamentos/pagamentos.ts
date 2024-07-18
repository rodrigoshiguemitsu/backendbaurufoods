// import { CreatePayment } from "../../Services/PagamentosServices/PagamentosServices";
import { Request, Response } from "express";
import axios from "axios";
//https://dev.pagbank.uol.com.br/reference/criar-pedido-pedido-com-qr-code

//https://dev.pagbank.uol.com.br/reference/criar-um-pedido-com-pagar-com-pagbank-deeplink
class GeneratePaymentLink {
  async handlePagamentosController(req: Request, res: Response) {
    const { valor, descricao, cliente } = req.body;

    const token = process.env.PAGBANK_TOKEN_LOCALHOST
    // const token = process.env.PAGBANK_TOKEN

    const apiPagamento = axios.create({
      // baseURL: "https://api.pagseguro.com",
      baseURL:"https://sandbox.api.pagseguro.com",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })


    if (!token) {
      throw new Error('Token de autenticação do PagBank não encontrado.');
    }


    try {

      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 1); // Adiciona 1 hora
      const expirationDateString = expirationDate.toISOString();


      const amountValue = parseFloat(valor)
      const gerarLinkPagamento = await apiPagamento.post('/orders',
        {
          amount: {
            value: amountValue.toFixed(2),
          },
          description: descricao,
          customer: {
            name: cliente.nome,
            email: cliente.email,
            tax_id: cliente.documento,
            document: {
              type: cliente.tipoDocumento, // 'CPF' ou 'CNPJ'
              value: cliente.documento
            },
            phone: {
              areaCode: cliente.telefone.ddd,
              number: cliente.telefone.numero
            }
          },
          payment_method:{
            pix:{
                holder:{
                  name: cliente.nome,
                  tax_id:cliente.documento
                }
            },
            qr_codes:{
              expiration_date: expirationDateString,
              amount:{
                value: amountValue.toFixed(2)
              }
            }
          }            
        }
      );
      console.log(gerarLinkPagamento.data)
      const payLink = gerarLinkPagamento.data.links.find(link => link.rel === 'PAY');
      return res.json({ paymentLink: payLink.href })

    } catch (error) {
      console.error('Erro ao gerar link de pagamento:', error);
      res.status(500).json({ error: 'Erro ao gerar link de pagamento' });
    }
  }
}

export { GeneratePaymentLink }