function novoSalario(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            console.log(`Novo salario: ${salarioAtual + (salarioAtual*0.1)}`)
            break
        case 'B':
            console.log(`Novo salario: ${salarioAtual + (salarioAtual*0.15)}`)
            break
        case 'C':
            console.log(`Novo salario: ${salarioAtual + (salarioAtual*0.2)}`)
            break
        default:
            console.log('Plano inexistente')
            break;
    }
}

novoSalario('A', 1000)
novoSalario('B', 1000)
novoSalario('C', 1000)
novoSalario('A', 1000)