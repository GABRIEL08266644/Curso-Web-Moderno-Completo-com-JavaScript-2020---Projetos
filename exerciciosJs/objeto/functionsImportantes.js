const pessoa = {
    nome: 'rebeca',
    idade: 20,
    peso: 13
}

console.log(Object.keys(pessoa))



Object.defineProperty(pessoa, 'dataNacimento', {
    enumerable: true,
    writable: false,
    value: '10/01/2000'
})

pessoa.dataNacimento = '10/20/3000'
console.log(pessoa.dataNacimento)
console.log(Object.keys(pessoa))

//object.assing (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)


Object.freeze(obj)
obj.c = 123
console.log(obj)