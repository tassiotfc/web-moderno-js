const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa = {nome: 'Ana'}
// console.log(pessoa) //produz erro, pois estamos querer o endereço da constante pessoa

/**
 * congelando pessoa = não conseguimos mais mexer no objeto
 * nenhuma operação sobre o objeto terá efeito
 */
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'}) //congelando o objeto em tempo de criação
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)