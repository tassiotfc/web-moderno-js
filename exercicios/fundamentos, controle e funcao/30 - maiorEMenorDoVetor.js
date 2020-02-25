const vetor = [10, 5, 8, 1, 3, 2, -8, 25, 23]

let maior = vetor[0]
let menor = vetor[0]

for(let i in vetor){
    if(vetor[i] > maior) maior = vetor[i]
    else if (vetor[i] < menor) menor = vetor[i]
}

console.log(maior, menor)