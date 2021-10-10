function verificaCrescimento(alturaCrianca1, taxaCrianca1, alturaCrianca2, taxaCrianca2){
    let tempo = 0
    if(alturaCrianca1 < alturaCrianca2){
        if(taxaCrianca1 > taxaCrianca2){
            while(alturaCrianca1 <= alturaCrianca2){
                alturaCrianca1 = alturaCrianca1 + taxaCrianca1
                alturaCrianca2 = alturaCrianca2 + taxaCrianca2
                tempo++
            }
            console.log(`A primeira criança ultrapassará a altura da segunda em ${tempo} ano(s)`)
        } else {
            console.log('A primeira criança nunca ultrapassará a altura da segunda')
        }
    } else if(alturaCrianca2 < alturaCrianca1){
        if(taxaCrianca2 > taxaCrianca1){
            while(alturaCrianca2 <= alturaCrianca1){
                alturaCrianca1 = alturaCrianca1 + taxaCrianca1
                alturaCrianca2 = alturaCrianca2 + taxaCrianca2
                tempo++
            }
            console.log(`A segunda criança ultrapassará a altura da primeira em ${tempo} ano(s)`)
        } else {
            console.log('A segunda criança nunca ultrapassará a altura da primeira')
        }
    } else {
        console.log('As crianças possuem a mesma altura')
    }
}

verificaCrescimento(90, 2.0, 100, 1.0)
verificaCrescimento(90, 2.0, 100, 3.0)
verificaCrescimento(90, 2.0, 80, 4.0)
verificaCrescimento(90, 2.0, 80, 1.0)
verificaCrescimento(100, 2.0, 100, 3.0)