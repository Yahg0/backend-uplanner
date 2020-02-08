const express = require('express');
const mongoose = require('mongoose'); 
const routes = require('./routes');

const port = process.env.PORT || 3333;

const app = express();
 
//String de conexão ao mongodb atlas
mongoose.connect('mongodb://manager:manager2020@ds335668.mlab.com:35668/uplanner', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(express.json());
app.use(routes);

app.listen(port);