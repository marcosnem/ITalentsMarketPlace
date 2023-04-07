const jwt = require ("jsonwebtoken");
const {findUserByIdService} = require("../service/usuario.service");
// pegar somente a funcao 


module.exports = async (req, res, next) => {

    // receber onde o token está
    const authHeader = req.headers.authorization;

    // teste se o cabecalho existe
    if(!authHeader){
        return res.status(401).send({messege: "O token nao foi encontrado"});
    }
    
    //desconstruir o authheader 
    const parts = authHeader.split(" ") //["Beaver, <token>"]

    if(parts.length !==2){
        return res.status(401).send({message: "Token inválido"});
    }
    
    // desconstrução de parts em um array
    const [schema, token] = parts;

    //expressao pra vasculhar o esquema, ve se está no padrao 
    if(!/^Bearer$/i.test(schema)){

        return res.status(401).send({message: "Token malformado"});
    }

    //verificar o token e a chave do authservice.js (secret)
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {

    if(err){
        return res.status(500).send({message: "Token invalido, erro no sistema"});
    }

     // pegar o iD do user dentro do payload
     const user = await findUserByIdService(decoded.id);

     // testa se existe o user e sua ID
    if(!user || !user.id){
        return res.status(401).send({message: "Token invalido, erro USER AND USER.ID"});

    }

    // Pega o ID do user que foi decodificado
    req.userId = decoded.id;

    // chama a funcao next
    return next();

})
    
}
