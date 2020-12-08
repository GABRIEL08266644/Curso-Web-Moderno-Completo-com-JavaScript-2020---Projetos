let valor  //nao inicializado
console.log(valor)
//console.log(valor2) erro!

valor = null // ausencia de valor
console.log(valor)
//console.log(valor.toString) erro!

const produtos = {}
console.log(produtos.preco)
console.log(produtos)

produtos.preco = 3.50
console.log(produtos)

produtos.preco = undefined // evite atribuir undefined
console.log(!!produtos.preco)
//delete procutos.preco
console.log(produtos)

produtos.preco = null //sem preço
console.log(!!produtos.preco)
console.log(produtos)
