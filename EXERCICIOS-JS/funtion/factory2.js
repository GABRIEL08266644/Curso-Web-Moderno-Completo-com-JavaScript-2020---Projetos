function criarProdutos(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProdutos('notebook', 4000))
console.log(criarProdutos('iphone', 10000))
