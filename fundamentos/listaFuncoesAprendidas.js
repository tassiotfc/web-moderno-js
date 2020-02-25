/**
 * Funções de manipulação de arrays
 */
console.log('FUNÇÕES DE ARRAYS')
const valores = [7.7, 8.9, 6.3, 9.2]
valores.push({id:3}, false, null, 'teste') //adicionando valores ao array
console.log(valores)
console.log(valores.pop()) //eliminando valor do final do array
console.log(valores)
const funcs = []
for(let i = 0; i < 10; i++){
    funcs.push(function() { //adicionando funções ao array
        return i*2
    })
}
console.log(funcs[2]())
console.log(funcs[9]())
console.log(funcs.pop()) //eliminando função do final do array
console.log()

/**
 * Funções matemáticas e numéricas
 */
console.log('FUNÇÕES MATEMÁTICAS E NUMÉRICAS')
let aleatorioEntre0e1 = Math.random() //aleatório entre 0 e 1
console.log(aleatorioEntre0e1)
console.log(Math.floor(aleatorioEntre0e1)) //arredonda pra cima
console.log(Math.ceil(aleatorioEntre0e1)) //arredonda pra baixo
console.log(Math.PI)
console.log(Math.pow(2, 2))
console.log(Number.isInteger(1.0)) //verifica se é inteiro
console.log(Number.isInteger(1.5)) //verifica se é inteiro
const media = 10
console.log(media.toFixed(2))   //limita casas decimais
console.log(media.toString(2))  //converte o numero para binario.
console.log()

/**
 * Funções de manipulação de string
 */
console.log('FUNÇÕES DE STRINGS')
const escola = "Cod3r3"
console.log(escola.toUpperCase()) // converte para maiúscula
console.log(media.toString()) //converte pra string
console.log((10.56).toString()) //converte pra string
console.log(escola.charAt(4)) //retorna caracter do índice informado
console.log(escola.charCodeAt(4)) //retorna o código UNICODE correspondente
console.log(escola.indexOf('3')) //retorna o índice do primeiro caracter encontrado
console.log(escola.substring(1)) //retorna a string a partir do índice informado
console.log(escola.substring(0, 3)) //retorna a string do índice 1 até o 3-1
console.log('Escola '.concat(escola).concat("!")) //concatena strings
console.log('Escola ' + escola + "!") //concatena strings
console.log(escola.replace(3, 'ae')) //substitui o primeiro 3 encontrado pela string 'ae' 
console.log(escola.replace(/\d/, 'ae')) //substitui o primeiro digito encontrado pela string 'ae'
console.log(escola.replace(/\d/g, 'ae')) //substitui cada digito pela string 'ae'
console.log(escola.replace(/\w/g, 'ae')) //substitui cada caracter pela string 'ae'
console.log('Ana,Maria,Pedro'.split(','))   //cria um array, dividindo os elementos 
                                            //conforme o separador informado como parâmetro
                                            //em split(''). No exemplo, é solicitado para
                                            //separar os elementos considerando ','.
console.log('Ana Maria Pedro'.split(' '))   //Criando array, considerando como elemento separador 
                                            //o espaço ' '


console.log()

/**
 * Funções de manipulação de datas
 */
console.log("FUNÇÕES DE MANIPULAÇÃO DE DATAS")
const d1 = new Date(0)
const d2 = new Date(0)
console.log(d1.getTime(), d2.getTime())