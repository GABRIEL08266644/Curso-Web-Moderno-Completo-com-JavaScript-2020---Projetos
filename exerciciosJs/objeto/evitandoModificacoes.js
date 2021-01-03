// Object.preventExtencions
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Exrencivel:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'julia', idade: 35 }
Object.seal(pessoa)
console.log('selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes