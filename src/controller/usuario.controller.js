//funcoes baseadas nas rotas

const userService = require("../service/usuario.service");

const findUserByIdController = async (req,res) => {
try{
    
   const user = await userService.findUserByIdService(req.params.id);

   if(!user) {
    return res.status(404).send({message: "Usuário não encontrado"});
   }

   return res.status(200).send(user);

}catch (err){

    if(err.kind == "ObjectId"){
       
        return res.status(400).send({message: `ID incorreto, tente novamente`});
    }
    
    console.log(`erro: ${err.message}`);

    return res.status(500).send({message: `Erro inesperado, tente novamente!`});
   
}

};

const findAllUsersController = async (req, res) => {
    try{

        return res.status(200).send(await userService.findAllUsersService(req.query.limit, req.query.offset));   

    }catch (err){
        
        console.log(`erro: ${err.message}`);
    
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
            
    }

};

const createUserController = async (req, res) => {
    try{

      res.status(201).send(await userService.createUserService(req.body));

    //fazer os if com o restante dos campos do usuario    

    }catch (err){
        
        console.log(`erro: ${err.message}`);
    
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    
        
    }

};

const updateUserController = async (req,res) => {
    try{

        const body = req.body;

        if(!body.nome){
            return res.status(400).send({message: `O campo 'nome' precisa ser preenchido!`});
        }

        return res.send(await userService.updateUserService(req.params.id, body));
   

    }catch (err){
        
        console.log(`erro: ${err.message}`);
    
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
         
    }
};

const removeUserController = async (req,res) => {
    try{

        const deletedUser = await userService.removeUserService(req.params.id);

        console.log(deletedUser);

        if(deletedUser == null){
            return res.status(200).send({message: `Usuário não encontrado, tente novamente`});

        }else {
            return res.status(404).send({message:  `Usuário deletado com sucesso` });
        }   

    }catch (err){
        
        console.log(`erro: ${err.message}`);
    
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
            
    }

};

const addUserAddressController = async (req,res) => {
    try{
        //Recebe o ID e todo o body
        const endereco = await userService.addUserAddressService(req.params.id, req.body);   

        console.log(endereco);
        if(endereco.value == null){

            return res.status(400).send({message: `Algo deu errado no endereço`});
        

        } else {

            return res.status(201).send({message: `Endereço adicionado com sucesso`});

        }



    }catch (err){
        
        console.log(`erro: ${err.message}`);
    
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    
        
    }


};

const removeUserAddressController = async (req,res) => {
    try{
// recebe do recebe ID e addressId para remover o endereço
const endereco = await userService.removeUserAddressService(req.body.id, req.body.addressId);

let found = false;
//faz o mapeamento dos valores do array enderecos e comparando se é o mesmo do addressId
endereco.value.enderecos.map((valor, chave) =>{

    if(valor._id == req.body.addressId){
        found = true;
    }
});

if(found){
    
    return res.status(200).send({message: `Endereço removido com sucesso`});

} else {

    return res.status(400).send({message: `Algo deu errado, endereço não removido`});
}
   

    }catch (err){
        
        console.log(`erro: ${err.message}`);
    
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    
        
    }


};

// const addUserFavProductController = async (req,res) => {
//     try{

//         res.status(201).send(await userService.addUserFavProductService(req.params.id, req.body));   

//     }catch (err){
        
//         console.log(`erro: ${err.message}`);
    
//         return res.status(500).send({message: `Erro inesperado, tente novamente!`});
            
//     }
// };

// const removeUserFavProductController = async (req,res) => {
//     try{

//         res.status(201).send(await userService.removeUserFavProductService(req.params.id, req.body));   


//     }catch (err){
        
//         console.log(`erro: ${err.message}`);
    
//         return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    
        
//     }


// };


module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressController
    // addUserFavProductController,
    // removeUserFavProductController,
}