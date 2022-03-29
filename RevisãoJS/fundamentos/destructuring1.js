// recursono ES2015
//objeto
const pessoa ={
    nome: 'Pedro',
    idade: 15,
    endereco:{
        logradouro: 'Rua Jonas',
        numero: 243
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log( sobrenome, bemHumorada)

const { endereco:{ logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)

const {conta: {ag, num}} = pessoa
console.log(ag, num)