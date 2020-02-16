const escola = "Cod3r3"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //não gera ERRO, retorna nada
console.log(escola.charCodeAt(3)) //retorna o código UNICODE correspondente
console.log(escola.indexOf('3')) //retorna o índice do cacarcter

console.log(escola.substring(1)) //retorna a string a partir do índice 1
console.log(escola.substring(0, 3)) //retorna a string do índice 1 até o 3-1

console.log('Escola '.concat(escola).concat("!")) //concatena strings
console.log('Escola ' + escola + "!") //concatena strings
console.log(escola.replace(3, 'e')) //substitui o primeiro 3 por e 
console.log(escola.replace(/\d/, 'e')) //substitui o primeiro 3 por e
console.log(escola.replace(/\d/g, 'e')) //substitui todos 3 por e
console.log(escola.replace(/\w/g, 'e')) //substitui todos os caracteres pelo e

console.log('Ana,Maria,Pedro'.split(',')) //cria um array, separando os elementos por vírgula
