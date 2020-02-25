/*
Uma variável definida com "var" permite que no mesmo arquivo ela seja redefinida novamente
Exemplo:
var a = 2
var a = 30
*/
var a = 3

/*
Uma variável definida com "let" não permite que no mesmo arquivo ela seja redefinida novamente
Exemplo:
let a = 2
let a = 30
Isso implicará em um erro
Declarar variáveis usando o "let" é uma BOA PRÁTICA
*/
let b = 4
console.log(a, b)

//por ser constante, não pode ser redefinida
const c = 5
console.log(c)