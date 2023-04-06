const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
//     produtos_fav: [
//         {
//             //define ID como um objeto do schema, sendo obrigatorio, unico e se refere a collection produtos
//             _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "produtos" }, 
//             createdAt: { type: Date, required: true, default: Date.now() },
//         }
//     ],
// //Usuario é admin. Por padrao o ususário nao é admin. 
//     admin: { type: Boolean, required: true, default: false},
});

//Usar os metodos pre do bcrypt no Schema do Usuario, antes de gerar o modelo

UsuarioSchema.pre("save", async function(next) {
    if(this.senha){
    //processo de embaralhar senha 10 vezes
    this.senha = await bcrypt.hash(this.senha, 10);
    }
    
    next();
    
    });

// Usuario recebe o modelo e grava o schema na collection usuarios
const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;