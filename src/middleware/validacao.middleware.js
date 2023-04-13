const validaUsuario = (req, res, next) => {
  if (!req.body.nome) {
    return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido` });
  }
  // confirmar o type de objeto
  if (req.body.nome){
    console.log(typeof(req.body.nome));
  }  
  if (!req.body.email) {
    return res.status(400).send({ message: `O campo 'email' precisa ser preenchido` });
  }
  if (!req.body.senha) {
    return res.status(400).send({ message: `O campo 'senha' precisa ser preenchido` });
 }
 if (!req.body.imagem) {
    return res.status(400).send({ message: `O campo 'imagem' precisa ser preenchido` });
  }
  if (!req.body.admin) {
    return res.status(400).send({ message: `O campo 'admin' precisa ser preenchido` });
  }

  return next();
}

const validaProduto = (req, res, next) => {
  let erros = [];  //var para acumular erros

  //checar cada campo
  if(!req.body.nome){
    erros.push("nome");
  }

  if(!req.body.descricao){
    erros.push("descricao");
  }

  if(!req.body.precoUnitario){
    erros.push("precoUnitario");
  }

  if(!req.body.imagem){
    erros.push("imagem");
  }

  if(!req.body.codigoBarra){
    erros.push("codigoBarra");
  }

  //se nao tiver erros, passe para o next
  if(erros.length == 0){
    return next();

} else {
  //se for um erro
    if(erros.length > 1){
      return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`  });
    }else {
      //se for mais de um
      return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`  });
    }
}
    
}

const validaCategoria = (req, res, next) => {

  if(!req.body.nome){

    return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!`  });
    
  }

  return next();

}

module.exports = {
    validaUsuario,
    validaProduto,
    validaCategoria
}