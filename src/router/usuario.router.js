const express = require("express");
//funcao para trabalhar com rotas
const router = express.Router();
const usuarioController = require("../controller/usuario.controller")
 

// rotas get
router.get('/findById:id', usuarioController.findUserByIdController);
router.get('/findAll', usuarioController.findAllUsersController);

// rotas post
router.post('/create', usuarioController.createUserController);
router.post('/addAddress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProductController);

// rotas put
router.put('/update/:id', usuarioController.updateUserController);

// rotas delete
router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removoAddress/', usuarioController.removeUserAddressController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProductController);

module.exports = router;