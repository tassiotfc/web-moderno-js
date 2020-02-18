function planoDeSaude(idade) {
    if (idade >= 0) {
        let valorPlano = 100
        if (idade < 10) {
            valorPlano += 80
        } else if (idade >= 10 && idade <= 30) {
            valorPlano += 50
        } else if (idade > 30 && idade <= 60) {
            valorPlano += 95
        } else if (idade > 60) {
            valorPlano += 130
        }
        console.log('Valor do plano: ', valorPlano)
    } else {
        console.log('Idade inválida')
    }
}

planoDeSaude(5)
planoDeSaude(10)
planoDeSaude(31)
planoDeSaude(61)
planoDeSaude(-1)
