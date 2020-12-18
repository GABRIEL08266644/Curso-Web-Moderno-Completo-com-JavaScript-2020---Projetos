const escola = [{
    nome: 'turma M1',
    alunos: [{
        nome: 'gustavo',
        nota: 8
    }, {
        nome: 'ana',
        nota: 9
    }]
}, {
    nome: 'turma M2',
    alunos: [{
        nome: 'rebeca',
        nota: 8
    }, {
        nome: 'roberto',
        nota: 7
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const nota1 = escola.map(getNotasTurma)
console.log(nota1)

console.log([].concat([8, 9], [8, 7]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)