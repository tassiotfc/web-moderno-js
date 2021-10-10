/**
 * IIEF: Inmediately Invoked Function Expression
 * É um padrão muito usado para fugir do escopo global
 * Criamos um função anonima cercada por parenteses e 
 * depois invocamos ela com ()
 */

(function () {
    console.log('Será executada na hora!')
    console.log('Foge do escopo mais abrangente!')
})()