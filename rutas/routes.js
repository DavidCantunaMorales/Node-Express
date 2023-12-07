// Importar Dependencias
const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  res.send('Hola Mundo, Bienvenidos.');
});

// Ruta 2
router.get('/ruta2', (req, res) => {
  res.send('Bienvenido a la ruta número 2.');
});

// Ruta 3
router.get('/usuario/:id', (req, res) => {
  res.send('El usuario es: ' + req.params.id)
})

// Ruta 4
router.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`¡Hola, ${nombre}! Bienvenido.`);
});

// Exporta el modulo
module.exports = router;
