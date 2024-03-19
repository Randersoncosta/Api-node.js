const express = require('express');
const testandoApi = require('./controller/controllerCompras');

const rotas = express()

rotas.get('/', testandoApi);

module.exports = rotas