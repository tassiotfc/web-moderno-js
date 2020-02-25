function arrendonda(nota) {
    let proximoMultiploDe5 = (nota - (nota % 5) + 5)
    if (nota >= 38) {
        if ((proximoMultiploDe5 - nota) < 3) {
            return proximoMultiploDe5
        } else {
            return nota
        }
    } else {
        return nota
    }
}

const validaNota = nota => nota >= 0 && nota <= 100 ? true : false

function classificaAluno(nota) {
    const notaValida = validaNota(nota)
    if (notaValida) {
        let notaArredondada = arrendonda(nota)
        if (notaArredondada >= 40) {
            console.log(`Aluno aprovado com nota ${notaArredondada}`)
        } else {
            console.log(`Aluno reprovado com nota ${notaArredondada}`)
        }
    } else {
        console.log('Nota inválida. Informe uma nota entre 0 e 100')
    }
}

classificaAluno(84)
classificaAluno(29)
classificaAluno(38)
classificaAluno(152)