/**
 * Os parametros de uma função é opcional
 * Caso seja passado algo na chamada, ainda assim
 * é possível recuperar os valores usando o array
 * arguments (padrão de JS que armazena os argumentos)
 */
function soma(){
    let soma = 0
    for(i in arguments){ // arguments é um array padrão de uma função
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))