let valor // não inicializada
console.log(valor)
//console.log(valor2) //produz erro

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) //produz erro

const produto = {}
console.log(produto.preco) //retorna undefined
console.log(produto) //retorna {}

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)
//delete produto.preco
//console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)