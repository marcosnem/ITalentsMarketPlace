const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

// servico que procura o email e seleciona a senha
const loginService = (email) => Usuario.findOne({email: email}).select("senha");

// service de assinatura do token com a chave e expirando em 24h
const generateToken = (userId) => jwt.sign({id: userId}, process.env.SECRET, {expiresIn: 86400});

module.exports = {
    loginService,
    generateToken
}