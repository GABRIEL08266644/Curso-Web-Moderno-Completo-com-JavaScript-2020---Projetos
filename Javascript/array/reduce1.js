const alunos = [
    { nome: 'joao', nota: 7, bolsista: false },
    { nome: 'maria', nota: 9, bolsista: true },
    { nome: 'pedro', nota: 9, bolsista: false },
    { nome: 'ana', nota: 8, bolsisita: true }
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)