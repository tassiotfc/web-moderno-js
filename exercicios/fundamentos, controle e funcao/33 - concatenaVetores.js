/*const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['Um', 'Dois', 'Três', 'Quatro']
const vetorDouble = [1.1, 2.2, 3.3, 4.4]

for(let i in vetorInteiro){
    console.log(vetorInteiro[i].toString().concat(vetorString[i]).concat(vetorDouble[i]))
}*/

function concatenar(vetor1, vetor2){
    let vetorResultante = []
    for(let i in vetor1){
        vetorResultante = vetorResultante.concat(vetor1[i])
    } 
    for(let i in vetor2){
        vetorResultante = vetorResultante.concat(vetor2[i])
    }
    return vetorResultante
}

const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['Um', 'Dois', 'Três', 'Quatro']
const vetorDouble = [1.1, 2.2, 3.3, 4.4]

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))