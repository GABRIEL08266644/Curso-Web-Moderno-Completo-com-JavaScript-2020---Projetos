Array.prototype.filter = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produto = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'notebook', preco: 4199, fragil: true },
    { nome: 'notebook', preco: 12.49, fragil: true },
    { nome: 'notebook', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))