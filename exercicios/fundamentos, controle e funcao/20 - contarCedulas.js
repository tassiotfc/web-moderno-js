function contarCedulas(valor){
    let valorRestante = valor
    let qtdNotas100 = Math.floor(valorRestante/100)
    valorRestante = valorRestante%100
    let qtdNotas50 = Math.floor(valorRestante/50)
    valorRestante = valorRestante%50
    let qtdNotas10 = Math.floor(valorRestante/10)
    valorRestante = valorRestante%10
    let qtdNotas5 = Math.floor(valorRestante/5)
    valorRestante = valorRestante%5
    let qtdNotas1 = Math.floor(valorRestante/1)
    valorRestante = valorRestante%1

    if(qtdNotas100 != 0){
        console.log(`${qtdNotas100} nota(s) de R$ 100,00`)
    }
    if(qtdNotas50 != 0){
        console.log(`${qtdNotas50} nota(s) de R$ 50,00`)
    }
    if(qtdNotas10 != 0){
        console.log(`${qtdNotas10} nota(s) de R$ 10,00`)
    }
    if(qtdNotas5 != 0){
        console.log(`${qtdNotas5} nota(s) de R$ 5,00`)
    }
    if(qtdNotas1 != 0){
        console.log(`${qtdNotas1} nota(s) de R$ 1,00`)
    }
}

contarCedulas(18)
contarCedulas(100)