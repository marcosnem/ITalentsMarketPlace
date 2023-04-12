const mongoose = require("mongoose");

const PedidoShema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "produtos"},
            quantidade: { type: Number, required: true}
        },
    ],
    createAt: { type: Date, required: true, default: Date.now},
    precoTotal: { type: Number, required: true},
    frete: { type: Number, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "usuarios" }, 
    concluido: { type: Boolean, required: true }
});

const Pedido = mongoose.model("pedidos", PedidoShema);

module.exports = Pedido;