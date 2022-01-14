const express = require('express');
const path = require('path');
const res = require('express/lib/response');

const { productos } = require('../../data/data')

const router = express.Router();

// Rutas
router.get('/', (req, res) => {
    // res.send('<h1 style="text-align:center"> Pagina Inicial </h1> <a href="/api/productos">Productos</a> <br> <br> <a href="/api/creaproducto"> Añadir Productos </a>   ')
    res.send('<h1 style="text-align:center"> Pagina Inicial </h1> <a href="/productos">Productos</a> <br> <br> <a href="/api/creaproducto"> Añadir Productos </a>   ')
});

/*
router.get('/creaproducto', (req, res) => {
    console.log('******************** ' + __dirname);
    res.sendFile(path.resolve(__dirname, './index.html'));
});

*/


module.exports = router; 