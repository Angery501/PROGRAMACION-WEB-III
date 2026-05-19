const express = require('express');
const app = express();
app.use(express.json());
const categoriasRoutes = require('./routes/categorias');
app.use('/categorias', categoriasRoutes);
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});