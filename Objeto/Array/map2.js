const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.490 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//returnar array apenas com os preços

const paraObjeto = json => JSON.parse(json) //tranforma texto para objeto
const apenasPreco = produto => produto.preco
const apenasNome = produto => produto.nome

const resultadoNome = carrinho.map(paraObjeto).map(apenasNome)
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultadoNome)
console.log(resultado)
