/**
 * A função setInterval executa uma função em um dado tempo
 * infinitamente.
 * setInterval(função/evento, tempo em milisegundos)
 */
const repetirOpa = function () {
    console.log('Opa')
}

const intervalo = setInterval(repetirOpa, 1000)

/**
 * A função setTimeout executa uma função em um dado tempo
 * e finaliza.
 * setTimeout(função/evento, tempo em milisegundos)
 */

const pararOpa = function () {
    clearInterval(intervalo) //pausa uma função/evento
}

setTimeout(pararOpa, 5000)