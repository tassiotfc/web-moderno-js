const vetor = [10, 10, 10, 10, 10, 10, 10, 8, 9]

let soma = 0

for (let i in vetor) {
    soma += vetor[i] 
}

console.log((soma/vetor.length).toFixed(2))