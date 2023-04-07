const mongoose = require("mongoose");

function connectTODatabase() {
  mongoose.connect(process.env.URLDATABASE,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log("Mongo DB Conectado");
    }).catch((err) => {
      return console.log(`Erro na conexão com o banco: ${err}`);
    });
}

module.exports = connectTODatabase;
