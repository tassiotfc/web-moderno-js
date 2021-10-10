const vetor = [1, 2, 3, 4, 5, 6, 7, 8]

let qtdPares = 0
let qtdImpar = 0

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
        qtdPares++
    } else {
        qtdImpar++
    }
}

console.log('Qtd valores pares: ', qtdPares, '- Qtd valores ímpares: ', qtdImpar)