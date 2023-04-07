const express = require("express");
require("dotenv").config();
const connectTODatabase = require("./src/database/database"); //arquivo de conexao do banco
const usuario = require("./src/router/usuario.router"); //arquivo da rota do usuario
const auth = require("./src/router/auth.router"); //arquivo da rota do usuario


const app = express();

const port = 3000;

app.use(express.json());

connectTODatabase(); //conectando com o banco teste

// uso das rotas importadas: usuario e login
app.use("/usuario", usuario);
app.use("/auth", auth);

app.get("/", (req,res) => {

    res.send({
        message:"Bem vindo ao Marketplace"
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})