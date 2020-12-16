// Coleção dinâmica de pares chaves/valor 
const produto = new Object
produto.nome = 'cadeira' 
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'a4',
    valor: 89000,
    proprieario: {
        nome: 'raul',
        idede: 56,
        endereco: {
            logradouro: 'rua  abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: '19'
    },{
        nome: 'ana',
        idade: 42
    }],
    caucularSeguro: function() {
        //..
    }
}

carro.proprieario.endereco.numero = 1000
carro['proprieario']['endereco']['logradouro'] = 'av gigante'
console.log(carro)

delete carro.condutores
delete carro.proprieario.endereco
console.log(carro)
console.log(carro.condutores)
