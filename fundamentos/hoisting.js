/**
 * hoisting = içar, jogar pra cima
 * uma 'var', quando definida abaixo de onde é usada
 * não produz erro
 * O JS faz o HOISTING, ou seja, joga ela pra cima
 */
console.log('a =', a)
var a = 2
console.log('a =', a)

//hoisting não ocorre com 'let'
console.log('b =', b)
let b = 2
//console.log('b =', b) //produz erro