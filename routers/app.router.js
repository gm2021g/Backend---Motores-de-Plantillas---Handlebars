const express = require('express');

const rutasProductos = require('./productos/productos.routes');
const rutasInicio = require('./inicio/inicio.routes');
const rutasCreaProducto = require('./creaproducto/creaproducto.routes');
const router = express.Router();

// Middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use('/productos', rutasProductos);
router.use('/inicio', rutasInicio);
router.use('/creaproducto', rutasCreaProducto);

module.exports = router; 