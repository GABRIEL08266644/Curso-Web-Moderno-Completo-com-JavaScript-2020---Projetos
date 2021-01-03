function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj1 = new Object
const obj2 = new Object
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome = 'antonio'
meuObjeto.prototype.falar = function () {
    console.log(`bom dia! meu nome é ${this.nome}!`)
}

obj2.nome = 'rafael'

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'obj3'


//resumindo a loucura
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype) 
console.log(Object.prototype.__proto__ === undefined)