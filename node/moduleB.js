// exportanto objetos de um módulo
module.exports = {
  bomDia: "Bom dia",
  boaNoite() {
    return "Boa Noite";
  },
};

module.exports.carro = {
  nome: "Palio",
  cor: "Preto",
  valor: 30.0,
};

// exportando funcões
module.exports.imprimeCarro = function (carro) {
  console.log(
    `Modelo: ${carro.nome} \nCor: ${carro.cor} \nValor: ${carro.valor}`
  );
};
