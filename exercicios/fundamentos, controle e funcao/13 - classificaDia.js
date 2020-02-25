function classificaDia(dia){
    switch(dia){
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia útil')
            break;
        case 7: case 1:
            console.log('Fim de semana')
            break;
        default:
            console.log('Dia inválido')
    }
}

classificaDia(1)
classificaDia(7)
classificaDia(5)
classificaDia(8)