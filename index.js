const express = require("express");
const connectTODatabase = require("./src/database/database"); //arquivo de conexao do banco
const usuario = require("./src/router/usuario.router"); //arquivo da rota do usuario

const app = express();

const port = 3000;

app.use(express.json());

connectTODatabase(); //conectando com o banco teste

// uso das rotas importadas na const usuario
app.use("/usuario", usuario); //chamando as rotas

app.get("/", (req,res) => {

    res.send({
        message:"Bem vindo ao Marketplace"
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})