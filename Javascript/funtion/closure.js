// Closure é o escopo criado quando uma function é declarada
// Esse escopo permite a function acessar e manipular variáveis externas à function

// Context Lexico em ação!

const x = 'global'

function fora() {
    const x = 'dentro' 
    function dentro() {
        return x
    }
    return dentro
}

const minhaFunction = fora()
console.log(minhaFunction())