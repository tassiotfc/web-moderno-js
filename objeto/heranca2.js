// Cadeia de protótipo (prototype chain)
Object.prototype.atrib0 = 'Z' //Devemos evitar esse tipo de manipulação
const avo = { atrib1: 'A' }
const pai = { __proto__: avo, atrib2: 'B', atrib3: '3' }
const filho = { __proto__: pai, atrib3: 'C' }

console.log(filho.atrib0, filho.atrib1, filho.atrib2, filho.atrib3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    },
    a: () => { console.log('Arrow Function') }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing ou sobrenhamento
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

/**
 * Estabelecendo a herença
 * ferrari tem carro como seu protótipo, ou,
 * ferrari herda de carro
 */
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo, volvo.status())

volvo.acelerarMais(100)
console.log(volvo.status())
volvo.a()

ferrari.acelerarMais(300)
console.log(ferrari.status())