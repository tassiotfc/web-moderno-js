/**
 * Problema com uso do this em contextos
 * variáveis: NaN
 */
function Pessoa() {
    this.idade = 0
    
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

/**
 * Abordagem 1 para amarrar o this em contextos
 * variáveis: USANDO BIND
 */
function Pessoa1() {
    this.idade = 0
    
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa1

/**
 * Abordagem 2 para amarrar o this em contextos
 * variáveis: USANDO CONSTANTE
 */
function Pessoa2() {
    this.idade = 0
    
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa2