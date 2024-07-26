import { ContaBancaria, TipoContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
    private taxaRendimento: number

    constructor(dadosConta: TipoContaBancaria) {
        super(dadosConta)

        this.taxaRendimento = 0.05
    }

    depositar(valor: number): string {
        this.saldo += valor + (valor * this.taxaRendimento)
        return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`
    }
    sacar(valor: number, senha: string): string {
        if (this.senha !== senha) {
            return 'Senha inválida'
        }

        if (valor > this.saldo) {
            return 'Saldo insuficiente'
        }

        this.saldo -= valor
        return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`
    }

}