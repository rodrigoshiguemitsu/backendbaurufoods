import prismaClient from "../../prisma";

interface PaymentData {
    valor: number;
    descricao: string;
    paymentLink: string;
  }
  
  class CreatePayment{
  async excuteCreatePayment({valor,descricao,paymentLink}:PaymentData) {
    console.log(valor,descricao,paymentLink)
    try {
      const payment = await prismaClient.payment.create({
        data:{
            amount:valor,
            description:descricao,
            paymentLink:paymentLink
        }
      });
      return payment;
    } catch (error) {
      throw new Error('Erro ao criar pagamento no banco de dados');
    }
  }
}
  export { CreatePayment }