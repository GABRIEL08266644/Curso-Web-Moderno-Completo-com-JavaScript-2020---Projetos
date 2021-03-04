function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[1]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 6, 8, 2))
console.log(soma(74, 4, 7, 'teste'))