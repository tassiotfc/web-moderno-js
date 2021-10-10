function multiplicaEscalarPorVetor1(escalar, vetor) {
    const vetorResultante = []
    for (let i in vetor) {
        vetorResultante.push(vetor[i] * escalar)
    }
    return vetorResultante
}

function multiplicaEscalarPorVetor2(escalar, vetor) {
    const vetorResultante = []
    if (escalar > 5) {
        for (let i in vetor) {
            vetorResultante.push(vetor[i] * escalar)
        }
        
    } 
    return vetorResultante
}

const vetor = [1, 2, 3, 4, 5]

console.log(multiplicaEscalarPorVetor1(2, vetor))

console.log(multiplicaEscalarPorVetor2(5, vetor))
console.log(multiplicaEscalarPorVetor2(10, vetor))