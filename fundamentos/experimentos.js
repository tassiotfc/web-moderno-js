let a = 3

global.b = 123 //add b ao escopo global

/**
 * Exportando variáveis para o módulo de exportação do nodejs
 * Não existe no runtime do browser
 */
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c) //similar ao this
console.log(module.exports === this) //mostrando que são iguais
console.log(module.exports) //mostrando os elementos armazenados

//criando uma variavel maluca: sem var e let!!!
abc = 3 //não faça isso em casa!!!
console.log(global.abc)