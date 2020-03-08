const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //obter todas as chaves do objeto em array
console.log(Object.values(pessoa)) //obter todas os valores do objeto em array
console.log(Object.entries(pessoa)) //obter todas as chaves/valores do objeto em array

/**
 * Usando forEach para obter os pares 
 * chave/valor de um objeto
 * Object.entries(pessoa) produz um array com os pares chave/valor,
 * a partir do qual pode ser feito o forEach
 */
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}:${e[1]}`)
})

/**
 * Usando forEach e destructuring para obter os pares 
 * chave/valor de um objeto
 * Object.entries(pessoa) produz um array com os pares chave/valor,
 * a partir do qual pode ser feito o forEach
 */
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}:${valor}`)
})

/**
 * Nova abordagem pra adicionar atributo ao objeto.
 * Permite definir algumas propriedades sobre o atributo:
 * - enumerable: habilita/desabilita exibição de atributo no Object.keys
 * - writavle: habilita/desabilita sobrescrita de valor
 * - value
 */
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

/**
 * Object.assign(dest, o1, o2, ...)
 * Permite concatenar chaves/valores de objetos
 * dest receberá as chave/valores de todos os objetos seguintes
 */
const dest = { a: 1 }
const o1 = {b:2}
const o2 = {c:3, a: 4}
Object.assign(dest, o1, o2)

console.log(dest)