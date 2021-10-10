function classificaTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado1 === lado3) {
        return 'Equilátero'
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(0, 0, 0))
console.log(classificaTriangulo(1, 1, 0))
console.log(classificaTriangulo(0, 1, 1))
console.log(classificaTriangulo(1, 0, 1))
console.log(classificaTriangulo(1, 2, 0))
