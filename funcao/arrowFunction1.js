let dobro = function (a) {
    return 2 * a
}

/**
 * Função arrow sempre deve ser atribuida a variavel
 * ou constante para ser chamada depois
 * Ela é sempre uma função anonima
 */
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui um único parametro
console.log(ola())