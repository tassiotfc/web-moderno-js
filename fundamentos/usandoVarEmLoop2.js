const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

//problema histórico do JS
funcs[1]() //imprime 10
funcs[8]() //imprime 10