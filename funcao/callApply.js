function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 49990,
    desc: 0.20
}

/**
 * Chamando funções call e aplly:
 * passamos pra ela o contexto 
 */
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

/**
 * Passando parametros usando call:
 * o primeiro é sempre o contexto, depois,
 * passamos os parametros da funcao chamada
 */
console.log(getPreco.call(carro, 0.17, '$'))

/**
 * Passando parametros usando apply:
 * o primeiro é sempre o contexto, depois,
 * passamos um array contendo os parametros
 * esperados pela funcao
 */
console.log(getPreco.apply(carro, [0.17, '$']))