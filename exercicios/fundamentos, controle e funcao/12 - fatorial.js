function fatorial(numero) {
    if (numero >= 0) {
        let fat = 1
        for (; numero >= 2; numero--) {
            fat *= numero
        }
        console.log(fat)
    } else {
        console.log('Não existe fatorial de número negativo')
    }
}

fatorial(0)
fatorial(5)
fatorial(-1)