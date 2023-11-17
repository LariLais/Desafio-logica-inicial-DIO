const readLine = require("readline");

let interface = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dadosDoHeroi = {
  nome: "",
  exp: 0,
  nivel: "",
};

function classificarNivel(experiencia) {
  dadosDoHeroi.exp = experiencia;

  switch (true) {
    case experiencia < 1000:
      dadosDoHeroi.nivel = "Ferro";
      break;
    case experiencia >= 1001 && experiencia <= 2000:
      dadosDoHeroi.nivel = "Bronze";
      break;
    case experiencia >= 2001 && experiencia <= 6000:
      dadosDoHeroi.nivel = "Prata";
      break;
    case experiencia >= 6001 && experiencia <= 7000:
      dadosDoHeroi.nivel = "Ouro";
      break;
    case experiencia >= 7001 && experiencia <= 8000:
      dadosDoHeroi.nivel = "Platina";
      break;
    case experiencia >= 8001 && experiencia <= 9000:
      dadosDoHeroi.nivel = "Ascendente";
      break;
    case experiencia >= 9001 && experiencia <= 10000:
      dadosDoHeroi.nivel = "Imortal";
      break;
    case experiencia >= 10001:
      dadosDoHeroi.nivel = "Radiante";
      break;
    default:
      console.log("Experiência inválida");
      break;
  }
}

interface.question("Qual o nome do herói? ", (nome) => {
  dadosDoHeroi.nome = nome;

  interface.question("Qual a experiência do herói? ", (experiencia) => {
    classificarNivel(parseInt(experiencia));
    console.log(
      `O herói de nome ${dadosDoHeroi.nome} está no nível de ${dadosDoHeroi.nivel}`
    );
    interface.close();
  });
});
