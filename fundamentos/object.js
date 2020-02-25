/**
 * Um objeto é uma coleção chave-valor
 * É diferente de JSON (JavaScript Object Notation). 
 * JSON é um formato textual que ajuda na troca de dados
 * entre sistemas agregando interoperabilidade
 */
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

prod2['Desconto Legal'] = 0.50
console.log(prod2)

'{"nome": "Camisa Polo", "preco": 79.90}'

