/**
 * Object.preventExtensions: 
 * permite evitar que um objeto possa
 * receber mais um atributo.
 * Nesse caso, o objeto produto possuirá, no máximo, os
 * atributos definidos em sua criação
 */
 const produto = Object.preventExtensions({
     nome: 'Qualquer', preco: 1.99, tag: 'promoção'
 })

 console.log('Extensível:', Object.isExtensible(produto))

 produto.nome = 'Borracha'
 produto.descricao = 'Borracha escolar branca' //não produz efeito algum
 delete produto.tag 
 console.log(produto)

 /**
  * Object.seal: permite selar o objeto, ou seja,
  * proibir a adição e a exclusão de atributos.
  * Entretanto, permite alterar os dados dos 
  * atributos
  */
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

/**
 * Object.freeze (selado + valores constantes):
 * proibir a adição, exclusão e alteração dos 
 * atributos e de um objeto
 */
