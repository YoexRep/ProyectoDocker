const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config(); //Para poder utilizar las variables de entorno
app.use(cors());

//Puerto del api server
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

//Importamos las rutas del proyecto
app.use(require("../routes/index"));
