import { Cliente } from "./Cliente"

export type TipoContaBancaria = {
    saldo: number,
    numero: string,
    agencia: string,
    senha: string,
    cliente: Cliente
}

export abstract class ContaBancaria {
    protected saldo: number
    public numero: string
    public agencia: string
    protected senha: string
    public cliente: Cliente

    constructor(dadosConta: TipoContaBancaria) {
        //Object.assign(this, dadosConta)
        this.saldo = dadosConta.saldo
        this.numero = dadosConta.numero
        this.agencia = dadosConta.agencia
        this.senha = dadosConta.senha
        this.cliente = dadosConta.cliente
    }

    consultarSaldo(senha: string): string {
        if (this.senha === senha) {
            return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`
        }
        return 'Senha inválida.'
    }

    abstract depositar(valor: number): string

    abstract sacar(valor: number, senha: string): string
}