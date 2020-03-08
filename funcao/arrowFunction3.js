/**
 * Numa funcao normal, o this aponta para 
 * o global
 */
let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) //mudando o this para o contexto do objeto
comparaComThis(global)
comparaComThis(obj)
/**
 * O this numa função arrow é um this
 * associado ao contexto no qual ela foi
 * escrita. Nesse caso, é o arquivo arrowFunction3.js
 * Mesmo usando o bind não há como mudar
 * esse contexto.
 */
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) //contexto no qual o this foi inscrito

comparaComThisArrow = comparaComThisArrow.bind(obj) //tentando, sem sucesso, mudar o this
comparaComThisArrow(obj)
comparaComThisArrow(module.exports) //contexto no qual o this foi inscrito

/**
 * Obs: 
 * Uma arrow function tem duas importantes vantagens:
 * - reduzir código
 * - garantir que o this não mude de contexto
 */