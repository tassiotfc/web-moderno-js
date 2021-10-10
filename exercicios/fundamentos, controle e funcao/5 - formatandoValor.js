function formataValorDecimal(valorDecimal) {
    valorString = `R$${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    return valorString
}

console.log(formataValorDecimal(0.1 + 0.2))