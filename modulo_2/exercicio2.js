const { listCarros } = require("./exercicio1");

const rodizio = {
  0: [],
  1: [1, 2],
  2: [3, 4],
  3: [5, 6],
  4: [7, 8],
  5: [9, 0],
  6: [],
};
function veiculosRodizio(diaSemana) {
  let carrosEmRodizio = [];
  listCarros.forEach((carro) => {
    const ultimoDigito = parseInt(carro.placa.charAt(carro.placa.length - 1));
    if (rodizio[diaSemana].includes(ultimoDigito))
      carrosEmRodizio.push(carro.modelo);
  });
  return carrosEmRodizio;
}

let cont = 0;
while (cont < Object.keys(rodizio).length) {
  const veiculosEmRodizio = veiculosRodizio(cont);
  if (!veiculosEmRodizio.length) {
    console.log(
      ` Não existem veiculos em rodizio para o dia ${cont} da semana`
    );
  } else {
    console.log(
      `  para o dia ${cont} da semana, existem os seguintes veiculos em rodizio: ${veiculosEmRodizio}`
    );
  }
  cont++;
}
