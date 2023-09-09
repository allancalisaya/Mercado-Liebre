const express = require('express');
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const app = express();
const rutaCuenta = require ('./routes/cuentaRouter')
const rutaIngreso = require ('./routes/cuentaRouter')
const mainRouter = require ('./routes/cuentaRouter')
const rutaLogo = require ('./routes/cuentaRouter')

app.set ("view engine", "ejs");
app.use('/', mainRouter);

app.use(express.static(publicPath));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "/views"));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/fome.html'));})

app.use('/CrearCuenta', rutaCuenta)

app.use('/Ingresa',rutaIngreso )

app.use('/PaginaPrincipal', rutaLogo)

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
