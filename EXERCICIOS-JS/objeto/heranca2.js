// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //nao faça isso em casa!

const avo = { attri1: 'a' }
const pai = { __proto__: avo, attr2: 'b', attr3: 'c' }
const filho = { __proto__: pai, attr3: '3' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 400,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 300
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())