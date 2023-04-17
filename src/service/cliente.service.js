const Cliente = require("../model/Cliente");

const findClienteByIdService =  (id) => {
   return Cliente.findById(id);
    
}

const findAllClientesService = (limit, offset) => {

    return Cliente.find().limit(limit).skip(offset);

}

const createClienteService = (body) => {
return Cliente.create(body);
    
}

const updateClienteService = (id,body) =>{
    return Cliente.findByIdAndUpdate(id,body, { returnDocument: "after" });

}

const removeClienteService = (id) => {
    return Cliente.findByIdAndRemove(id);

}

const addClienteAddressService = (id,endereco) => {
// usar os indices do array para cada campo do endereco

return Cliente.findOneAndUpdate(
    {
        _id: id
    },
    {
        // push adicionar algo no objeto
        $push: {
            
            enderecos: endereco,
        }
    },
    {
//Passa o resultado crud / bruto
    rawResult: true,

    }
);


}

const removeClienteAddressService = (id, addressId) => {
    // usar os indices do array para cada campo do endereco

return Cliente.findOneAndUpdate(
    {
        _id: id,
    },
    {
        // pull para remover parte do objeto, se baseando no ID
        $pull:{
            
            enderecos: {
                _id: addressId,
            }
        }
    },
    {
//Passa o resultado crud / bruto
    rawResult: true,

    }
)

}

const addClienteFavProductService = (id, produto) => {

    return Cliente.findOneAndUpdate({
        _id: id,
    },
    {
        $push: {
            
            produtos_fav: {
                _id: produto._id,
            }
        }
    },
    {
        rawResult: true,
    }
    );
}

const removeClienteFavProductService = (id, produto) => {

    return Cliente.findOneAndUpdate(
    {
        _id: id,
    },
    {
        $pull: {
            
            produtos_fav: {
                _id: produto._id,
            }
        }
    },
    {
        rawResult: true,
    }
    );
}

module.exports = {

findClienteByIdService,
findAllClientesService,
createClienteService,
updateClienteService,
removeClienteService,
addClienteAddressService,
removeClienteAddressService,
addClienteFavProductService,
removeClienteFavProductService,

}