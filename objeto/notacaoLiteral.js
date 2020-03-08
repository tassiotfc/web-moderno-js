const a = 1
const b = 2
const c = 3

//antes do ES2015 ou ES6
const obj1 = { a: a, b: b, c: c }
//depois do ES2015 ou ES6
const obj2 = { a, b, c }

console.log(obj1, obj2)

const nomeAtrib = 'nota'
const valorAtrib = 7.86

//antes do ES6
const obj3 = {}
obj3[nomeAtrib] = valorAtrib
console.log(obj3)

//depois do ES6
const obj4 = { [nomeAtrib]: valorAtrib }
console.log(obj4)

const obj5 = {
    //antes do ES6
    funcao1: function () {
        //...
    },
    //depois do ES6
    funcao2() {
        //...
    }
}

console.log(obj5)