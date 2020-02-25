/**
 * Escopo:
 * Diz que variavel definida com 'let' tem escopo global, escopo de função
 * e escopo de bloco
 */
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero) //procura o 'numero' mais próximo
}
console.log('fora =', numero)

/**
 * Aparte:
 * O let foi criado para não precisar redefinir
 * o comportamento de var com relação a escopo.
 * Isso teria implicado na quebra de uma grande
 * quantidade de sistemas que usavam apenas var
 */