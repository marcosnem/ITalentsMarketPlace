const Usuario = require("../model/Usuario");

const findUserByIdService =  (id) => {
   return Usuario.findById(id);
    
}

const findAllUsersService = () => {

    return Usuario.find();

}

const createUserService = (body) => {
return Usuario.create(body);
    
}

const updateUserService = (id,body) =>{
    return Usuario.findByIdAndUpdate(id,body, { returnDocument: "after" });

}

const removeUserService = (id) => {
    return Usuario.findByIdAndRemove(id);

}

const addUserAddressService = (id,endereco) => {
// usar os indices do array para cada campo do endereco

return Usuario.findOneAndUpdate(
    {
        _id: id
    },
    {
        // push adicionar algo no objeto
        $push: {
            
            enderecos: endereco
        }
    },
    {
//Passa o resultado cru / bruto
    rawResult: true,

    }
)


}

const removeUserAddressService = (id) => {

}

const addUserFavProductService = (id, produto) => {

}

const removeUserFavProductService = (produto) => {

}

module.exports = {

findUserByIdService,
findAllUsersService,
createUserService,
updateUserService,
removeUserService,
addUserAddressService,
removeUserAddressService,
addUserFavProductService,
removeUserFavProductService,


}