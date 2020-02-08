const { Router } = require('express');
const CustomerController = require('./controllers/CustomerController');

const routes = Router();

//Define a rota de acesso do servidor
routes.get('/customers', CustomerController.index);

module.exports = routes;