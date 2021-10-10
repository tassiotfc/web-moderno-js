/**
 * Exemplo de callback no browser
 * Atribuindo callback ao evento de clique no corpo
 * do browser
 */
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}