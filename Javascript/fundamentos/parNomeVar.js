//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'fallaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: '32',
    peso: '90',
    endereco: {
        rua: 'muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)