// Importar Dependencias
const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  res.send('¡Hola, esta es la ruta principal!');
});

// Ruta 2
router.get('/ruta2', (req, res) => {
  res.send('¡Hola, esta es la ruta secundaria!');
});

// Ruta 3
router.get('/user/:id', (req, res) => {
  res.send('El usuario es: ' + req.params.id)
})

// Ruta 4
router.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`¡Hola, ${nombre}! Bienvenido.`);
});

// Exporta el modulo
module.exports = router;
