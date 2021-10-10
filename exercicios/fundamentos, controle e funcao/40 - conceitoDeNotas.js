function classificaNota(nota) {
    for (let i in nota) {
        if (nota[i] >= 0 && nota[i] <= 4.9) {
            console.log('Conceito D')
        } else if (nota[i] >= 5 && nota[i] <= 6.9) {
            console.log('Conceito C')
        } else if (nota[i] >= 7 && nota[i] <= 8.9) {
            console.log('Conceito B')
        } else if (nota[i] >= 9 && nota[i] <= 10) {
            console.log('Conceito A')
        }
    }
}

classificaNota([10, 8, 6, 4])