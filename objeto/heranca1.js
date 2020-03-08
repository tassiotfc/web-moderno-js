const ferrari = {
    modelo: 'F40',
    velMax: 24
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

/**
 * Todo objeto possui o atributo __proto__, que 
 * aponta para a função Object.prototype
 * Object.prototype.__proto__ aponta pra null
 */
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() { }
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)