console.log('01)', '1' == 1) //== compara apenas os valores
console.log('02)', '1' === 1) //=== significa comparar se são estritamente iguais, inclusive, o tipo
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) //compara o endereco de memória
console.log('10', d1 == d2) //compara o endereco de memória
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', d1.getTime() == d2.getTime())

console.log('13)', undefined == null)
console.log('14)', undefined === null)
