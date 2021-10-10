console.log(7 / 0)  //não gera erro, retorna o tipo 'infinity'
console.log("10" / 2)   //não gera erro, verifica se a string é número e faz a devida operação 
console.log('3' + 2) //não faz a soma, mas, CONCATENA. As operações com strings são mais fortes que aritméticas
console.log("Show!" * 2)    //retorna o NaN 
console.log(0.1 + 0.7)  //produz um valor impreciso, devido a especificação da IEEE que traz mais rapidez
//console.log(10.toString())    //gera um ERRO
console.log((10).toString())    //roda com sucesso, sem precisar definir uma variavel para armazenar o numero
console.log((10.345).toFixed(2))//roda com sucesso, sem precisar definir uma variavel para armazenar o numero