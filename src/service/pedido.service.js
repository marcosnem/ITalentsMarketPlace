const Pedido = require("../model/Pedido");

const findPedidoByIdService = (id) => {
    return Pedido.findById(id);
}

const findAllPedidosService = () => {
    return Pedido.find();
}

const createPedidoService = (body) => {
    return Pedido.create(body);
}

// const updatePedidoService = (id, body) => {
//     return Pedido.findByIdAndUpdate(id, body, { returnDocument: "after" });
// }

const deletePedidoService = (id) => {
    return Pedido.findByIdAndRemove(id);
}

const updateStatusPedidoService = (id) => {

}

module.exports = {
    findPedidoByIdService,
    findAllPedidosService,
    createPedidoService,
    // updatePedidoService,
    deletePedidoService,
    updateStatusPedidoService
}