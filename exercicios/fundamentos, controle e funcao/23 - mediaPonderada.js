const validaNota = nota => nota >= 0 && nota <= 10 ? true : false

function calculaMediaPonderada(codigo, nota1, nota2, nota3) {
    if (validaNota(nota1) && validaNota(nota2) && validaNota(nota3)) {
        let mediaPonderada = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10
        if (mediaPonderada >= 5) {
            console.log(`Código:${codigo}, Notas:${nota1, nota2, nota3}, Média:${mediaPonderada}
        Aprovado`)
        } else {
            console.log(`Código:${codigo}, Notas:${nota1, nota2, nota3}, Média:${mediaPonderada}
        Reprovado`)
        }
    } else {
        console.log('Operação inválida')
    }
}

calculaMediaPonderada(131, 10, 10, 10)
calculaMediaPonderada(135, 4, 5, 5)
calculaMediaPonderada(135, 11, 5, 5)