const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigimas: funcional e oo


const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()

const falar2 = pessoa.falar.bind(pessoa)
falar2()