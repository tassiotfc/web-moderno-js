const impar = numero => numero % 2 === 1 ? true : false

function imprimirImpar(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = inicio + fim
        fim = inicio - fim
        inicio = inicio - fim
    }

    for (; inicio <= fim; inicio++) {
        if (impar(inicio)){
            console.log(inicio)
        }
    }
}

imprimirImpar()
imprimirImpar(0, 10)
imprimirImpar(10, 0)