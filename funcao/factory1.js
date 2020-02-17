/**
 * Uma função factory é uma função que retorna um objeto
 * Ela ajuda na criação de objetos sem precisar repetir
 * muito código
 */

 function criarPessoa(){
     return {
         nome: 'Ana',
         sobrenome: 'Silva'
     }
 }

 console.log(criarPessoa())