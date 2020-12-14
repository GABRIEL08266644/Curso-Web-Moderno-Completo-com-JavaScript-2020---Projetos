//function declaration
console.log(soma(2, 3))

function soma(x, y) { //posso declarar antes
    return x + y
}

//function Expression
const sub = function (x, y) {  //nao posso declarar antes
    return x - y
}
console.log(sub(2, 3))


//named function express
const mult = function mult(x, y) { //nao posso declarar antes
    return x * y
}
console.log(mult(2, 3))

