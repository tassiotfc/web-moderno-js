function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Palio', 45000))
console.log(criarProduto('BMW', 500000))