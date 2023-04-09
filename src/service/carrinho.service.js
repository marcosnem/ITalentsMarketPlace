const Carrinho = require("../model/Carrinho");

const findCarrinhoBybyIdService = (id) => {
    return Carrinho.findById(id);
}

const findAllCarrinhosService = () => {
    return Carrinho.find();
}

const createCarrinhoService = (body) => {
    return Carrinho.create(body);
}

const updateCarrinhoService = (id, body) => {
    return Carrinho.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteCarrinhoService = (id) => {
    return Carrinho.findByIdAndRemove(id);
}

module.exports = {
    findCarrinhoBybyIdService,
    findAllCarrinhosService,
    createCarrinhoService,
    updateCarrinhoService,
    deleteCarrinhoService
}