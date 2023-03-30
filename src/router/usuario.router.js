const express = require("express");
const usuarioController = require("../controller/usuario.controller")
 
//funcao para trabalhar com rotas
const router = express.Router();

router.get('/findById:id');
router.get('/findAll');

router.post('/create');
router.post('/addAddress/:id');
router.post('/addFavProduct/:id');

router.put('/update/:id');

router.delete('/remove/:id');
router.delete('/removoAddress/');
router.delete('/removeFavProduct');

module.exports = router;