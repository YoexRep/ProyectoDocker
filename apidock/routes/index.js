const { Router } = require("express");

const router = Router();

//Saludos
const { getSaludo } = require("../controllers/saluda.controller");


router.get("/", (req, res) => {
    res.send("Conexión exitosa");
  });
  

router.get("/getSaludo/:codsaludo", getSaludo);

module.exports = router;
