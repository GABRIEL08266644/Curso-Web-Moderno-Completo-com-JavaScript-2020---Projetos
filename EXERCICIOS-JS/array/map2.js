const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "kit de lapis", "preco": 14190 }',
    '{ "nome": "caneta", "preco": 7.90 }',
]

//retorna array com precos


const paraObject = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObject).map(apenasPreco)
console.log(resultado)