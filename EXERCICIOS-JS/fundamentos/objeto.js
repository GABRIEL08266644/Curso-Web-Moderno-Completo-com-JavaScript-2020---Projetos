const prod1 = {}
prod1.nome = 'celular ultra mega' //evitar atributos com espaços
prod1.preco = 49998.90
prod1['desconto legal'] = 0.40 

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 79.90,
    obj:{
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(prod2)