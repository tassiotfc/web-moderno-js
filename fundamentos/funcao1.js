// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

// todas as chamadas são aceitas
imprimirSoma(1, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 5, 6, 7, 8)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 0){ // b eh 0 por default
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())