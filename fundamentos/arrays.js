const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //não produz erro, retorna 'undefined'

valores[4] = 10
console.log(valores)
valores[10] = 10 //não produz erro, coloca o 10 no indice 10 e preenche os indices intermediarios com vazios
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') //adicionando valores ao array
console.log(valores)

console.log(valores.pop()) //eliminando valor do final do array
console.log(valores)
delete valores[0] //eliminando valor de indice do array
console.log(valores)

console.log(typeof valores)

/**
 * Um array em JS pode ser heterogêneo, mas, 
 * eh preferivel mante-lo homogeneo
 */