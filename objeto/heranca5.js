console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

/**
 * Adicionando a função reverse no tipo string
 * Essa função não existe por padrão
 * Usa-se o this para acessar a string que deseja-se manipular
 * this.split(''): converte string para array, caracter a caracter (exemplo: 'ab' => ['a', 'b'])
 * this.split('').reverse(): inverte os elementos do array gerado (exemplo: ['a', 'b'] => ['b', 'a'])
 * this.split('').reverse().join(''): converte o array em string (exemplo: ['b', 'a'] => 'ba')
 */
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['Pedro', 'Maria', 'José'].first())

/**
 * Cuidado ao sobrescrever métodos existentes 
 * no protótipo
 */
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())