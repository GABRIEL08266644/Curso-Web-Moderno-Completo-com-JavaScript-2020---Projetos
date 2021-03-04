//novo recurso do ES2015

const pessoa = {
    nome : 'ana',
    idade: '5',
    endereco: {
        logradiuri: 'rua abc',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHunirada = true} = pessoa
console.log(sobrenome, bemHunirada)

const{ endereco: {logradiuri, numero, cep}} = pessoa
console.log(logradiuri, numero, cep)

const {conta: { ag, num }} = pessoa
console.log(ag, num)