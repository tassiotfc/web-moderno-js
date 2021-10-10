const ehMultiploDe4 = ano => ano % 4 === 0 ? true : false

const ehMultiploDe100 = ano => ano % 100 === 0 ? true : false

const ehMultiploDe400 = ano => ano % 400 === 0 ? true : false

function anoEhBissexto(ano) {
    if (ehMultiploDe400(ano) && !ehMultiploDe100(ano)) {
        console.log(`${ano} é um ano bissexto`)
    } else if (ehMultiploDe4(ano) && !ehMultiploDe100(ano)) {
        console.log(`${ano} é um ano bissexto`)
    } else {
        console.log(`${ano} não é ano bissexto`)
    }
}

anoEhBissexto(1004)
anoEhBissexto(1900)
anoEhBissexto(2020)
anoEhBissexto(1576)
anoEhBissexto(1980)