//pode ser entendida como uma CLASSE
const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

/**
 * Definindo herança na criação
 */
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }  
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //mostra somente as chaves que não foram herdadas
console.log(Object.keys(filha2)) //mostra somente as chaves que não foram herdadas

/**
 * Mostra todas as chaves, inclusive, aquelas herdadas
 */
for(let key in filha2){
    console.log(key)
}

/**
 * Mostra todas as chaves, inclusive, aquelas herdadas
 */
for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}