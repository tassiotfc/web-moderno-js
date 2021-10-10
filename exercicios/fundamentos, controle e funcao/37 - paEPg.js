function progressaoAritmetica(n, a1, r) {
    let somaElementos = 0
    let termoAtual = a1
    for (let i = 0; i < n; i++) {
        console.log(termoAtual)
        somaElementos += termoAtual
        termoAtual += r
    }
    console.log(`Soma dos elementos da PA: ${somaElementos}`)
}

progressaoAritmetica(5, 2, 2)

function progressaoGeometrica(n, a1, r) {
    let somaElementos = 0
    let termoAtual
    for (let i = 0; i < n; i++) {
        termoAtual = a1 * Math.pow(r, i)
        console.log(termoAtual)
        somaElementos += termoAtual
    }
    console.log(`Soma dos elementos da PG: ${somaElementos}`)
}

progressaoGeometrica(5, 1, 2)