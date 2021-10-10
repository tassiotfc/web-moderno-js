function divisaoEResto(dividendo, divisor) {
    if (divisor !== 0) {
        console.log(`Divisão = ${dividendo / divisor}, Resto da divisão = ${dividendo % divisor}`)
    } else {
        console.log('Operacão proibida. Divisor não pode ser ZERO!!!')
    }
}

divisaoEResto(4, 8)
divisaoEResto(4, 0)