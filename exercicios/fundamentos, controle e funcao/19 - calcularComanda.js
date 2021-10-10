function calcularComanda(codigo, qtd) {
    let valorTotal = 0
    switch (codigo) {
        case 100:
            valorTotal = 3 * qtd
            break
        case 200:
            valorTotal = 4 * qtd
            break
        case 300:
            valorTotal = 5.5 * qtd
            break
        case 400:
            valorTotal = 7.5 * qtd
            break
        case 500:
            valorTotal = 3.5 * qtd
            break
        case 600:
            valorTotal = 2.8 * qtd
            break
        default:
            console.log('Produto inexistente')
            return
    }
    console.log(valorTotal)
}

calcularComanda(100, 2)
calcularComanda(200, 2)
calcularComanda(300, 2)
calcularComanda(400, 2)
calcularComanda(500, 2)
calcularComanda(600, 2)
calcularComanda(700, 2)