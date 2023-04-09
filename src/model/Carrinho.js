const mongoose = require("mongoose");

const carrinhoShema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: "produtos"},
            quantidade: { type: Number, required: true}
        },
    ],
    createAt: { type: Date, required: true, default: Date.now},
    precoTotal: { type: Number, required: true},
    frete: { type: Number, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "usuarios" }, 

});

const Carrinho = mongoose.model("carrinhos", carrinhoShema);

module.exports = Carrinho;