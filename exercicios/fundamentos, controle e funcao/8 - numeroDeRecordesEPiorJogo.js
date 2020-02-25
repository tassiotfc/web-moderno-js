/**
 * avaliaPontuacoes() retorna um array 
 * do tipo [qtdQuebraDeRecords, piorJogo],
 * onde:
 * - qtdQuebraDeRecords: numero de vezes que o jogador de basquete bateu recorde
 * - piorJogo: posicao do array que está o pior jogo
 * @param {String} pontuacoes 
 */
function avaliaPontuacoes (pontuacoes) {
    const pontuacaoArray = pontuacoes.split(' ').map(Number) //convertendo string em array numérico
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacaoArray[0]
    let menorPontuacao = pontuacaoArray[0]
    
    for (let i = 1; i < pontuacaoArray.length; i++) {
        if(pontuacaoArray[i] > maiorPontuacao) {
            maiorPontuacao = pontuacaoArray[i]
            qtdQuebraDeRecords++
        }else if (pontuacaoArray[i] < menorPontuacao) {
            menorPontuacao = pontuacaoArray[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoes('10 20 20 8 25 3 0 30 1'))