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
};

module.exports = {
    validaUsuario
}