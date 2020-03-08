console.log(soma(3, 4))

/**
 * Forma tradicional de declarar funcao:
 * function declaration
 * Permite chamar a função antes da declaração
 */
function soma(x, y){
    return x + y
}

//console.log(sub(5, 2)) // produz erro

/**
 * Forma anonima de declarar funcao:
 * function expression
 * Não permite chamar a função antes da declaração
 */
const sub = function (x, y){
    return x - y
}

console.log(sub(5, 2))

//console.log(mult(5, 2)) // produz erro

/**
 * Forma nomeada de declarar funcao:
 * named function express
 * É pouca usada. 
 * Pode ajudar a debugar o código.
 * Não permite chamar a função antes da declaração
 */
const mult = function mult(x, y){
    return x * y
}

console.log(mult(5, 2))