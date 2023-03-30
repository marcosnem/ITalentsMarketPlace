const express = require("express");
const usuarioController = require("../controller/usuario.controller")
 
//funcao para trabalhar com rotas
const router = express.Router();

// rotas get
router.get('/findById:id', usuarioController.findUserByIdController);
router.get('/findAll', usuarioController.findAllUsersController);

// rotas post
router.post('/create', usuarioController.createUserController);
router.post('/addAddress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProduct);

// rotas put
router.put('/update/:id', usuarioController.updateUserController);

// rotas delete
router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removoAddress/', usuarioController.removeUserAddressController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProduct);

module.exports = router;