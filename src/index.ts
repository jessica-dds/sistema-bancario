import { Cliente } from "./Cliente";
import { ContaPoupanca } from "./ContaPoupanca";

const jessica = new Cliente({
    nome: 'Jéssica',
    email: 'jessica@email.com',
    cpf: '12345678900'
})

const guilherme = new Cliente({
    nome: 'Guilherme',
    email: 'guilherme@email.com',
    cpf: '12345678901'
})

const contaPoupancaJessica = new ContaPoupanca({
    cliente: jessica,
    numero: '0012-3',
    agencia: '321-3',
    senha: '123abc',
    saldo: 50000
})

const contaCorrenteGuilherme = new ContaPoupanca({
    cliente: guilherme,
    numero: '0012-4',
    agencia: '321-3',
    senha: '123abc',
    saldo: 100000
})

console.log(contaPoupancaJessica, contaCorrenteGuilherme);

