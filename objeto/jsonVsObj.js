/** 
 * JSON ou JavaScript Object Notation É DIFERENTE de um objeto em JS!
 * Trata-se de um formato textual para troca de dados entre sistemas
 * Sendo, possivelmente, o mais usado para prover interoperabilidade.
 * Ele armazena somente DADOS, diferente de um objeto que além de dados
 * tbm armazena FUNÇÕES
 * O mondodb é um exemplo de banco de dados que armazena dados no formato 
 * similar ao JSON
*/
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) //convertendo objeto em JSON

//console.log(JSON.parse("{a:1, b: 2, c:3}")) //formato inválido
//console.log(JSON.parse("{'a':1, 'b': 2, 'c':3}")) //formato inválido
console.log(JSON.parse('{"a":1, "b": 2, "c":3}')) //formato válido
console.log(JSON.parse('{"a":1, "b": "string", "c":true, "d": {}, "e": []}')) //formato válido