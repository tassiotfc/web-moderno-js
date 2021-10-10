/**
 * Destructuring de objetos
 * Uma forma de fazer atribuicoes mais rápidas
 * 
 * Novo recurso de ES2015
 */

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}


const {nome, idade} = pessoa //obtendo valores de atributos de um objeto sem precisar usar notacao '.'
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //obtendo valores e jogando em variáveis com nomes diferentes
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa //definindo valores padroes, caso não encontre
console.log(sobrenome, bemHumorada)
 
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const {endereco} = pessoa
console.log(endereco)