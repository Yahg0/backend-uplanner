const axios = require('axios');
const Customer = require('../models/Customer');

module.exports = {
    async index(request, response){
        const customers = await Customer.find();

        return response.json(customers); 
        
    },
};

