//par nome / valor
const saudacao = 'Ola' //contexto léxico 1


function exec() {
    const saudacao = 'Falaa' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Victor',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua traira',
        numero: 243,
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)