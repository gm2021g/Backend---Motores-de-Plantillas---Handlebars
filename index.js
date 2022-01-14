const path = require('path');
const express = require('express');
const { productos } = require('./data/data');
const { engine } = require('express-handlebars');

const rutasApi = require('./routers/app.router');

const app = express();
const PORT = process.env.PORT || 8080;

//Motores de Plantillas
app.engine('handlebars', engine({
  extname: 'hbs',
  defaultLayout: 'main.hbs',
  layoutsDir: path.resolve(__dirname, './views/layouts'),
  partialsDir: path.resolve(__dirname, './views/partials')
}
));

app.set('view engine', 'handlebars');
app.set('views', './views');

// Rutas
app.use('/api', rutasApi);

app.get('/productos', (req, res) => {
  res.render('index', { showAllProducts: true, products: productos })
})

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.log(error.message);
})


