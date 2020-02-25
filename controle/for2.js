/**
 * for/in é uma abordagem que facilita percorrer 
 * array e objetos
 */

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(`nota = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana', 
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

/**
 * Obtendo os valores de cada atributo do objeto
 * pessoa. 
 * Os atributos de um objeto podem ser acessados 
 * de forma análoga a um array. 
 * A diferença é que
 * passamos entre [] o nome do atributo.
 */
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}