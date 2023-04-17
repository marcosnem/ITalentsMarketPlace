const express = require("express");
//funcao para trabalhar com rotas
const router = express.Router();
const clienteController = require("../controller/cliente.controller");
const authMiddleware = require("../middleware/auth.middleware");  
const { validaCliente, validaClienteEndereco, validaIdParams, valida_IdBody } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas get
router.get('/findById/:id', authMiddleware, validaIdParams, clienteController.findClienteByIdController);
router.get('/findAll', authMiddleware, paginacao, clienteController.findAllClientesController);

// rotas post
router.post('/create', validaCliente, clienteController.createClienteController);
router.post('/addAddress/:id', authMiddleware, validaIdParams, validaClienteEndereco, clienteController.addClienteAddressController);
router.post('/addFavProduct/:id',  authMiddleware, validaIdParams, valida_IdBody, clienteController.addClienteFavProductController);

// rotas put
router.put('/update/:id', authMiddleware, validaIdParams, validaCliente, clienteController.updateClienteController);

// rotas delete
router.delete('/remove/:id',  authMiddleware, validaIdParams, clienteController.removeClienteController);
router.delete('/removeAddress',  authMiddleware, clienteController.removeClienteAddressController);
router.delete('/removeFavProduct/:id',  authMiddleware, validaIdParams, clienteController.removeClienteFavProductController);

module.exports = router;