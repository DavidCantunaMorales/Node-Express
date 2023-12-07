// Importan Dependencias
const express = require('express');
const app = express();

// Puerto
const PORT = 3000;

// Importar las rutas desde el archivo routes.js
const rutas = require('./rutas/routes');

// Usar las rutas importadas
app.use('/', rutas);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
