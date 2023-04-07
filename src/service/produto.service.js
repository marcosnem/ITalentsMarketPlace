const Produto = require("../model/Produto");

const findProductByIdService =  (id) => {
   return Produto.findById(id);
    
}

const findAllProductService = () => {

    return Produto.find();

}

const createProductService = (body) => {
return Produto.create(body);
    
}

const updateProductService = (id,body) =>{
    return Produto.findByIdAndUpdate(id,body, { returnDocument: "after" });

}

const deleteProductService = (id) => {
    return Produto.findByIdAndRemove(id);

}

module.exports = {

findProductByIdService,
findAllProductService,
createProductService,
updateProductService,
deleteProductService,

}