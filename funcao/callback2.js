const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

/**
 * Extraindo do array as notas menores que 7
 * sem usar callback
 */
const notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

/**
 * Extraindo do array as notas menores que 7
 * usando callback
 * Usando a funcao filtro para filtrar os dados
 * com base em um criterio definido numa
 * callback
 * filter não altera o array notas
 */
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

//definindo callback como arrow function
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)

console.log(notasBaixas3)