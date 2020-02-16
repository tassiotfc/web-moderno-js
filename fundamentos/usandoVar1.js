/**
 * Escopo:
 * Uma variável 'var', quando não declarada dentro de função
 * ela é global.
 * Diz que variavel definida com 'var' tem escopo global e escopo de função
 * Usando o brower, toda variável global é adicionada por padrão
 * ao objeto window. Fazendo 'window.variavel' conseguimos acessa-la 
 * no console
 */
{
    {
        {
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
// console.log(local) // produz erro

