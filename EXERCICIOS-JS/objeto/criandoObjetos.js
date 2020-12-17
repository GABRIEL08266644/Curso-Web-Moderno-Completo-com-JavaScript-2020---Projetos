//usando anotação literal
const obj1 = {}
console.log(obj1)

// objeto em JS 

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// function contrutora
function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('caneta', 7.99, 0.15)
const p2 = new produto('notebook', 5.999, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//function factory
function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 7.999, 4)
const f2 = criarFuncionario('maria', 11.999, 1)
console.log(f1.getSalario(), f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

//um function famosa que nao retorna object...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)