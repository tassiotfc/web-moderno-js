/**
 * estrategia 1 para gerar valor padrao
 * ainda bastante usada, principalmente, para atribuir valores
 * padrões para variáveis
 */
console.log('Estratégia 1: Usando o operador ||')
function soma1(a, b, c) {
    a = a || 1 //atribuindo valor padrão
    b = b || 1
    c = c || 1
    return a + b + c
}

// Atenção: Em soma1(0, 0, 0), a soma não é feita, pois 0 é falso. Isso é um problema.
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

//estrategia 2 para gerar valor padrao
console.log('Estratégia 2: Usando ? e undefined')
function soma2(a, b, c) {
    a = a != undefined ? a : 1
    b = b != undefined ? b : 1
    c = c != undefined ? c : 1
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//estrategia 3 para gerar valor padrao
console.log('Estratégia 3: Usando ? e arguments')
function soma3(a, b, c) {
    a = 0 in arguments ? a : 1
    b = 1 in arguments ? b : 1
    c = 2 in arguments ? c : 1
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))

/**
 * estrategia 4 para gerar valor padrao
 * A melhor estratégia usando JS puro, sem o ES2015
 * Mas, devemos sempre preferir ES2015
 */
console.log('Estratégia 4: Usando ? e isNaN()')
function soma4(a, b, c) {
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma4(), soma4(3), soma4(1, 2, 3), soma4(0, 0, 0))

//valor padrao do es2015
console.log('Estratégia 5: Usando ES2015')
function soma5(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma5(), soma5(3), soma5(1, 2, 3), soma5(0, 0, 0))