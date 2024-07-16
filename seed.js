const mongoose = require("mongoose")




const { Perfil } = require("./models") //recebe informações dos modelos




mongoose.connect('mongodb://127.0.0.1:27017/ebacpizza'); //conecta na collection desejada, nesse caso, pageprofile foi a collection selecionada


//a const abaixo fará inserção de acordo com as informações que temos nos nossos modelos
const seedPerfil = [
  {
    "nome": "Leonardo",
    "sobrenome": "Galdino",
    "idade": 26,
  }
];


//a const abaixo vai realizar a inserção dos valores acima

const seedDB = async () => {
  await Perfil.deleteMany({});
  await Perfil.insertMany(seedPerfil);
};


//fechando a conexão, para garantir segurança
seedDB().then(() => {
  mongoose.connection.close();
});