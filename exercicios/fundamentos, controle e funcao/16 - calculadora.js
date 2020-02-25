const soma = (operando1, operando2) => operando1 + operando2
const subtracao = (operando1, operando2) => operando1 - operando2
const multiplicacao = (operando1, operando2) => operando1 * operando2
const divisao = function (operando1, operando2) {
    if (operando2 != 0) {
        return operando1 / operando2
    } else {
        return 'Divisão proibida. Denominador igual a ZERO!!!'
    }
}

function calculadora(operando1, operando2, operador) {
    switch (operador) {
        case '+':
            console.log(soma(operando1, operando2))
            break
        case '-':
            console.log(subtracao(operando1, operando2))
            break
        case '*':
            console.log(multiplicacao(operando1, operando2))
            break
        case '/':
            console.log(divisao(operando1, operando2))
            break
        default:
            console.log('Operacao inválida')
    }
}

calculadora(2, 2, '+')
calculadora(2, 2, '-')
calculadora(2, 2, '*')
calculadora(2, 2, '/')
calculadora(2, 0, '/')