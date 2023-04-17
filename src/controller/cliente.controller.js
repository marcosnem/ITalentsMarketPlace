//funcoes baseadas nas rotas

const clienteService = require("../service/cliente.service");

const findClienteByIdController = async (req,res) => {
try{
    
   const cliente = await clienteService.findClienteByIdService(req.params.id);

   if(!cliente) {
    return res.status(404).send({message: "Cliente não encontrado"});
   }

   return res.status(200).send(cliente);

}catch (err){

    if(err.kind == "ObjectId"){
       
        return res.status(400).send({message: `ID incorreto, tente novamente`});
    }
    
    console.log(`erro: ${err.message}`);

    return res.status(500).send({message: `Erro inesperado, tente novamente!`});
   
}

};

const findAllClientesController = async (req, res) => {
    try{

        return res.status(200).send(await clienteService.findAllClientesService(req.query.limit, req.query.offset));   

    }catch (err){
        
        console.log(`erro: ${err.message}`);
    
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
            
    }

};

const createClienteController = async (req, res) => {
    try{

        const body = req.body;

        if(!body.nome){
            return res.status(400).send({message: `O campo 'nome' precisa ser preenchido!`});
        }

        res.status(201).send(await clienteService.createClienteService(body));

    //fazer os if com o restante dos campos do usuario    

    }catch (err){
        
        console.log(`erro: ${err.message}`);
    
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    
        
    }

};

const updateClienteController = async (req,res) => {
    try{

        const body = req.body;

        if(!body.nome){
            return res.status(400).send({message: `O campo 'nome' precisa ser preenchido!`});
        }

        return res.send(await clienteService.updateClienteService(req.params.id, body));
   

    }catch (err){
        
        console.log(`erro: ${err.message}`);
    
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
         
    }
};

const removeClienteController = async (req,res) => {
    try{

        const deletedCliente = await clienteService.removeClienteService(req.params.id);

        console.log(deletedCliente);

        if(deletedCliente == null){
            return res.status(200).send({message: `Cliente não encontrado, tente novamente`});

        }else {
            return res.status(404).send({message:  `Cliente deletado com sucesso` });
        }   

    }catch (err){
        
        console.log(`erro: ${err.message}`);
    
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
            
    }

};

const addClienteAddressController = async (req,res) => {
    try{
        //Recebe o ID e todo o body
        const endereco = await clienteService.addClienteAddressService(req.params.id, req.body);   

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

const removeClienteAddressController = async (req,res) => {
    try{
// recebe do recebe ID e addressId para remover o endereço
const endereco = await clienteService.removeClienteAddressService(req.body.id, req.body.addressId);

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

const addClienteFavProductController = async (req,res) => {
    try{

        res.status(201).send(await clienteService.addClienteFavProductService(req.params.id, req.body));   

    }catch (err){
        
        console.log(`erro: ${err.message}`);
    
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
            
    }
};

const removeClienteFavProductController = async (req,res) => {
    try{

        res.status(201).send(await clienteService.removeClienteFavProductService(req.params.id, req.body));   


    }catch (err){
        
        console.log(`erro: ${err.message}`);
    
        return res.status(500).send({message: `Erro inesperado, tente novamente!`});
    
        
    }


};


module.exports = {
    findClienteByIdController,
    findAllClientesController,
    createClienteController,
    updateClienteController,
    removeClienteController,
    addClienteAddressController,
    removeClienteAddressController,
    addClienteFavProductController,
    removeClienteFavProductController,
}