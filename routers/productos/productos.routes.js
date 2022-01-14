const express = require('express');
const path = require('path');
const res = require('express/lib/response');

const { productos } = require('../../data/data')

const router = express.Router();

// Rutas
/*
router.get('/', (req, res) => {
    res.send('<h1 style="text-align:center"> Pagina Inicial </h1> <a href="/api/productos">Productos</a> <br> <br> <a href="/api/creaproducto"> Añadir Productos </a>   ')
});

router.get('/api/creaproductos', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});
*/


router.get('/', (req, res) => {
    let respuestaProductos = [...productos];
    return res.json(respuestaProductos);
});

router.get('/:idProducto', (req, res) => {
    const { idProducto } = req.params;
    const producto = productos.find(producto => producto.id === +idProducto);
    if (!producto) {
        return res.status(404).send(`Producto no encontrado. id: ${req.params.idProducto}`);
    }
    return res.json(producto);
});

router.post('/', (req, res) => {
    const { title, price, thumbnail } = req.body;
    if (!title || !price || !thumbnail) {
        return res.status(400).send('El cuerpo tiene un formato incorrecto')
    }
    const nuevoProducto = {
        id: productos.length + 1,
        title,
        price,
        thumbnail
    };
    productos.push(nuevoProducto);
    return res.json(nuevoProducto);
});

router.put('/:idProducto', (req, res) => {
    const { params: { idProducto }, body: { title, price, thumbnail } } = req;
    const indiceProducto = productos.findIndex((producto) => producto.id === +idProducto);
    if (indiceProducto < 0) return res.status(404).send(`El producto con id ${idProducto} no existe!`);
    const nuevoProducto = {
        ...productos[indiceProducto],
        title,
        price,
        thumbnail
    };
    productos[indiceProducto] = nuevoProducto;
    return res.json(nuevoProducto);
});

router.delete('/:idProducto', (req, res) => {
    const { idProducto } = req.params;
    const indiceProducto = productos.findIndex(producto => producto.id === +idProducto);
    if (indiceProducto < 0) return res.status(404).send(`Producto con id ${idProducto} no existe!`);
    // productos = productos.filter(producto => producto.id !== +idProducto); mostrar error 500!!!
    productos.splice(indiceProducto, 1);
    return res.send('producto eliminado correctamente!');
});

module.exports = router; 