function pessoa(nome) {
    constructor(nome)
    this.nome = nome
    this.falar = function() {
    console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new pessoa('joao')
p1.falar()