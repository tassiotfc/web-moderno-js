const funcsVar = []

for(var i = 0; i < 10; i++){
    funcsVar.push(function() {
        console.log(i)
    })
}

//problema histórico do JS
funcsVar[2]() //imprime 10
funcsVar[8]() //imprime 10

const funcsLet = []
for(let i = 0; i < 10; i++){
    funcsLet.push(function() {
        console.log(i)
    })
}

/**
 * Problema histórico resolvido pelo ES2015 com a definição do let
 * Isso, pq o let tem escopo de bloco
 */
funcsLet[2]() //imprime 2
funcsLet[8]() //imprime 8