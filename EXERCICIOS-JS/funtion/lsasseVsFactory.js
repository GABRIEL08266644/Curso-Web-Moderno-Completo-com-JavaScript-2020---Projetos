class pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new pessoa('joao')
p1.falar()

//bem melhor
const criarPessoas = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
} 

const p2 = new pessoa('andre')
p2.falar()