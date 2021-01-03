const produto = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'notebook', preco: 4199, fragil: true },
    { nome: 'notebook', preco: 12.49, fragil: true },
    { nome: 'notebook', preco: 18.99, fragil: false }
]

console.log(produto.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))