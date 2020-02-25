function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * taxaDeJuros * tempoDeAplicacao
}

console.log(jurosComposto(1000, 2.5, 1).toFixed(2))

function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * Math.pow(1 + taxaDeJuros, tempoDeAplicacao)
}

console.log(jurosComposto(2000, 0.04, 4).toFixed(2))