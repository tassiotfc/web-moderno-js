function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * Math.pow(1 + taxaDeJuros, tempoDeAplicacao)
}

function calcularAnuidade(mes, valor) {
    if (mes >= 1 && mes <= 12) {
        return jurosComposto(valor, 0.05, mes)
    } else {
        return 'Mês inválido'
    }
}

console.log(calcularAnuidade(1, 1000))
console.log(calcularAnuidade(2, 1000))
console.log(calcularAnuidade(13, 1000))