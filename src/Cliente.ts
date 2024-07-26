export type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string
}

export type TipoCliente = {
    nome: string
    email: string
    cpf: string
}


export class Cliente {
    nome: string
    email: string
    cpf: string
    dataCadastro: Date
    enderecos: Endereco[]

    constructor(Cliente: TipoCliente) {
        this.nome = Cliente.nome
        this.email = Cliente.email
        this.cpf = Cliente.cpf
        this.dataCadastro = new Date()
        this.enderecos = []
    }

    adicionarEndereco(endereco: Endereco): void {
        this.enderecos.push(endereco)
    }
}