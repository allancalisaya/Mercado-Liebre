const express = require('express');
const router = express.Router();
const cuentaController = require ('../controllers/cuentaControllers')
const path = require('path');

router.get ('/CrearCuenta', cuentaController.formulario)

router.get ( '/Ingresa', cuentaController.index)

router.get ('/PaginaPrincipal',cuentaController.logo)

module.exports = router;