const nums = [1, 2, 3, 4, 5]

//for com propósito
//maps gera novo array

let resultado = nums.map(function (element){
    return element * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(nums.map(soma10))
console.log(resultado)