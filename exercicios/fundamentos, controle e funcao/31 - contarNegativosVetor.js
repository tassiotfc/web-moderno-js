const vetor = [10, 5, 8, 1, 3, 2, -8, 25, -23]

let qtdNegativos = 0

for (let i in vetor) {
    if (vetor[i] < 0) qtdNegativos++
}

console.log(qtdNegativos)