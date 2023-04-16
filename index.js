const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectTODatabase = require("./src/database/database"); //arquivo de conexao do banco

// rotas importadas
const usuario = require("./src/router/usuario.router"); //arquivo da rota do usuario
const auth = require("./src/router/auth.router"); //arquivo da rota do usuario
const produto = require("./src/router/produto.router"); //arquivo da rota do produto
const categoria = require("./src/router/categoria.router"); //arquivo da rota da categoria
const carrinho = require("./src/router/carrinho.router"); //arquivo da rota da carrinho
const pedido = require("./src/router/pedido.router"); //arquivo da rota da pedido
const docs = require("./src/router/docs.router"); //arquivo da rota da documentacao

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors(
  {
    origin: ["localhost:3000", "localhost:3001"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }
));

connectTODatabase(); //conectando com o banco teste

// uso das rotas importadas: usuario, login, auth, produto, categoria e carrinho
app.use("/usuario", usuario);
app.use("/auth", auth);
app.use("/produto", produto);
app.use("/categoria", categoria);
app.use("/carrinho", carrinho);
app.use("/pedido", pedido);
app.use("/docs", docs);

app.get("/", (req, res) => {
  res.send({
    message: "Bem vindo ao Marketplace",
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
