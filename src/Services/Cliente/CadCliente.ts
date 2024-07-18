import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface CadastroCliente {
    nome: string
    email: string
    password: string
    tipoDocumento: string
    cpf: string
    ddd: string
    whatsapp: string
    cep: string
    endereco: string
    numero: string
    bairro: string
    cidade: string
    estado: string
}
class CadCliente {

    async exCadastroCliente({ nome, email, password, tipoDocumento, cpf, ddd, whatsapp, cep, endereco, numero, bairro, cidade, estado }: CadastroCliente) {


        // Função para gerar uma string aleatória com letras maiúsculas e pelo menos um número
        function gerarCodigoCliente(length = 5) {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const numbers = '0123456789';
            let result = '';

            // Inclui pelo menos um número na string resultante
            result += numbers.charAt(Math.floor(Math.random() * numbers.length));

            // Gera o restante da string com letras maiúsculas e números
            for (let i = 1; i < length; i++) {
                result += letters.charAt(Math.floor(Math.random() * letters.length));
            }

            // Embaralha a string resultante para maior aleatoriedade
            result = result.split('').sort(() => Math.random() - 0.5).join('');

            return result;
        }

        async function isClienteIdUnico(codIdCliente) {
            const existCliente = await prismaClient.clientes.findUnique({
                where: {
                    codigoIdCliente: codIdCliente
                }
            })
            return !existCliente  //retorna true se o codigo for unico
        }


        // Função para gerar um clienteId único
        async function generateUniqueClienteId(length = 5) {
            let codIdCliente;
            let isUnique = false;

            while (!isUnique) {
                codIdCliente = gerarCodigoCliente(length);
                isUnique = await isClienteIdUnico(codIdCliente);
            }

            return codIdCliente;
        }

        const codIdCliente = await generateUniqueClienteId()



        const senhaCrypt = await hash(password, 8)

        const verCpfEmail = await prismaClient.clientes.findFirst({
            where: {
                cpf: cpf,
                email: email
            }
        })
        if (verCpfEmail) {
            throw new Error('Cliente já cadastrado!')
        }


        await prismaClient.clientes.create({
            data: {
                codigoIdCliente: codIdCliente,
                nome: nome,
                email: email,
                senha: senhaCrypt,
                tipoDocumento: tipoDocumento,
                cpf: cpf,
                ddd: ddd,
                whatsapp: whatsapp,
                cep: cep,
                endereco: endereco,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            }

        })

        return { dados: "Cliente cadastrado com sucesso" }

    }

}
export { CadCliente }

