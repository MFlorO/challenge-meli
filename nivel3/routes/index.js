const express = require('express');
const router = express.Router();
const mutantRoutes = require('./mutant');

// Ruta de bienvenida
router.get('/', (req, res) => res.send('Bienvenido Meli al backend de este proyecto!'));

// Otras rutas
router.use('/mutant', mutantRoutes);

module.exports = router;
