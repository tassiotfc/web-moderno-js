const valor = 'Global'

/**
 * Sempre que for chamada, irá imprimir o valor
 * 'Global', pois uma função carrega consigo
 * o contexto na qual foi definida
 * Um função, quando não encontra uma variável interna,
 * procura no ambiente mais externo.
 */
function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()