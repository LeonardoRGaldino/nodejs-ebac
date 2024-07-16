const { Schema } = require ('mongoose');

const Perfil = new Schema({

    nome:{
        type: String,
        require: true
    },
    sobrenome:{
        type: String,
        require: true
    },
    idade:{
        type: Number,
        require: true
    }
})

module.exports = Perfil;
