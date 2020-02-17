//o uso de função anonima é muito comum em JS
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

//definindo funcao anonima em objeto
const pessoa = {
    falar: function (){
        console.log('Olá')
    }
}

pessoa.falar()