const { Schema } = require ('mongoose');

const Pedido = new Schema({
    cliente:{
        nome:{
            type: String,
            require: true
        },
        sobrenome:{
        type: String, 
        require: true,
    },
        pizzas:[
            {
            sabor:{ 
                type: String,
                require: true, 
            },
            tamanho:{
                type: String,
                require: true,
                enum: ["Pequeno", "Medio", "Grande"]

            },
            quantidade:{
                type: Number, 
                require: true,
            },


        }
    ],
             metodoPagamento:{
                type: String,
                require: true, 
                enum:["Pix","Cartão de Credito"]
            },
            
            total:{
                type: Number, 
                require: true,

            },
            pago:{
                type: Boolean,
                default: false
            }





}});

module.exports = Pedido;
