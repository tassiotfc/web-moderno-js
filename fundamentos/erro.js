function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw { //lançando um objeto como resposta ao erro
        nome: erro.name,
        msg: erro.message,
        date: new Date
    } 
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { //executa caso tenha erro
        tratarErroELancar(e)
    } finally { //executa sempre, independentemente de erro
        console.log('final')
    }
}

const obj = {name: 'Pedro'}
imprimirNomeGritado(obj)