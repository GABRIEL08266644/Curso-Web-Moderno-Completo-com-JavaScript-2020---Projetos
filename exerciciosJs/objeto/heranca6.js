function aula(nome, IDvdeos) {
    this.nome = nome
    this.IDvdeos = IDvdeos
}

const aula1 = new aula('bem vindo', 123)
const aula2 = new aula('ate breve', 456)

console.log(aula1, aula2)

//simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(aula, 'bem vindo', 123)
const aula4 = novo(aula, 'bem vindo', 456)
console.log(aula3, aula4)