const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Redmi Note 10 Pro Max', preco: 1800, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 5.89, fragil: false }
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))