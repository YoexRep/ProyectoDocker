const ConexionBD = require("../util/conexionbd");
const pool = ConexionBD.GetBdPool();

const getSaludo = async (req, res) => {
  const codigoSaludo = req.params.codsaludo;
  const response = await pool.query(
    'select f_saludo from "public".t_saludos sal  where sal.f_codigo_saludo =$1',
    [codigoSaludo]
  );
  res.status(200).json(response.rows);
};

module.exports = {
  getSaludo,
};
