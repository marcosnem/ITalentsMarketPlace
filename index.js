const express = require("express");
const connectTODatabase = require("./src/database/database");
const usuario = require("./src/router/usuario.router");

const app = express();

const port = 3000;

app.use(express.json());

connectTODatabase();

// uso das rotas importadas na const usuario
app.use("/usuario", usuario);

app.get("/", (req,res) => {

    res.send({
        message:"Bem vindo ao Marketplace"
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})