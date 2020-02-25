/**
 * bhaskara() calcula as raizes de uma equacao 
 * do segundo grau: ax² + bx + c
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} c 
 */
function bhaskara(a, b, c) {
    delta = Math.pow(b, 2) - 4 * a * c
    const raizes = []
    if (delta >= 0 && a > 0) {
        raizes.push((-b + Math.sqrt(delta)) / (2 * a))
        raizes.push((-b - Math.sqrt(delta)) / (2 * a))
        return raizes
    } else if (delta < 0) {
        return 'Delta é negativo'
    } else if (a === 0) {
        return 'Coeficiente principal igual a ZERO!'
    }
}

console.log(bhaskara(1, -5, 6)) //delta > 0
console.log(bhaskara(4, -4, 1)) //delta === 0
console.log(bhaskara(1, -4, 5)) //delta < 0
console.log(bhaskara(0, 4, 4)) //a === 0