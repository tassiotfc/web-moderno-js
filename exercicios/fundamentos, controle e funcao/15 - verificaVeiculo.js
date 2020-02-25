function verificaVeiculo(veiculo) {
    switch (veiculo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break;
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
            break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

verificaVeiculo('hatch')
verificaVeiculo('sedans')
verificaVeiculo('motocicletas')
verificaVeiculo('caminhonetes')
verificaVeiculo('helicóptero')