import { ContaBancaria, TipoContaBancaria } from "./ContaBancaria";

export class ContaCorrente extends ContaBancaria {
    private limite: number

    constructor(dadosConta: TipoContaBancaria) {
        super(dadosConta)

        this.limite = 100000
    }

    depositar(valor: number): string {
        this.saldo += valor
        return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`
    }
    sacar(valor: number, senha: string): string {
        if (this.senha !== senha) {
            return 'Senha inválida'
        }

        if (valor > this.saldo + this.limite) {
            return 'Saldo insuficiente'
        }

        this.saldo -= valor
        return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`
    }

}