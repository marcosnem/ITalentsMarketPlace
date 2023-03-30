const express = require("express");
const connectTODatabase = require("./src/database/database");

const app = express();

const port = 3000;

app.use(express.json());

connectTODatabase();

app.get("/", (req,res) => {

    res.send({
        message:"Bem vindo ao Marketplace"
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})