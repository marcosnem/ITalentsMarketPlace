const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
    imagem: { type: String, required: true },
    enderecos: [
        {
            rua: { type: String, required: true },
            numero: { type: String, required: true },
            complemento: { type: String, required: false },
            CEP: { type: String, required: true },
            createdAt: { type: Date, required: true, default: Date.now() },
        }
    ],
//salva data de quandoo user foi criado 
    createdAt: { type: Date, required: true, default: Date.now() },
// 
    produtos_fav: [
        {
            //define ID como um objeto do schema, sendo obrigatorio, unico e se refere a collection produtos
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "produtos" }, 
            createdAt: { type: Date, required: true, default: Date.now() },
        }
    ],
//Usuario é admin. Por padrao o ususário nao é admin. 
    admin: { type: Boolean, required: true, default: false},
});

// Usuario recebe o modelo e grava o schema na collection usuarios
const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;