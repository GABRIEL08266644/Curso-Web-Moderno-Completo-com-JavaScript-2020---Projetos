const alunos = [
    { nome: 'joao', nota: 7, bolsista: false },
    { nome: 'maria', nota: 9, bolsista: true },
    { nome: 'pedro', nota: 9, bolsista: false },
    { nome: 'ana', nota: 8, bolsista: true }
]


// desafio 1 : todos os alunos sao bolsisitas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// desafio 2 : algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))