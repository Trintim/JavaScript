// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {id: 1, nome: 'Caneta', preco: 1.25},
    {id: 2, nome: 'Carderno', preco: 3.89},
    {id: 3, nome: 'Lapiseira', preco: 7.80},
    {id: 4, nome: 'Corretivo', preco: 4.39},
  ])
}
