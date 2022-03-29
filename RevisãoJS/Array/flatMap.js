const escola =[{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Victor',
        nota: 9.2
    }, {
        nome: 'Iasmin',
        nota: 9.15
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Gilson',
        nota: 8.75
    }, {
        nome: 'Fabin',
        nota: 7.13
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

console.log([].concat([ 9.2, 9.15 ], [ 8.75, 7.13 ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)

