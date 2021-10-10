function verificaFruta(fruta) {
    switch (fruta) {
        case 'maça':
            console.log('Nâo vendemos esta fruta aqui')
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break;
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break;
        default:
            console.log('Fruta não inválida')
    }
}

verificaFruta('maça')
verificaFruta('kiwi')
verificaFruta('melancia')
verificaFruta('pêra')