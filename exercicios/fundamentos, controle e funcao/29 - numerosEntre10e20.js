function numeroEntreeFora10e20(vetor){
    let qtdEntre10e20 = 0
    let qtdFora10e20 = 0
    for(let i in vetor){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdEntre10e20++
        } else {
            qtdFora10e20++
        }
    } 
    console.log(`Qtd no intervalo [10,20]: ${qtdEntre10e20}`)
    console.log(`Qtd fora do intervalo [10,20]: ${qtdFora10e20}`)
}

numeroEntreeFora10e20([1, 10, 15, 20, 21])
