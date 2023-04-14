const router = require("express").Router();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

//usar o caminho para iniciar o server 
router.use("/api-docs", swaggerUi.serve);
//caminho para abrir a documentacao. Setup config a partir do swaggerDocument 
router.get("/api-docs", swaggerUi.setup(swaggerDocument)); 

module.exports = router;
