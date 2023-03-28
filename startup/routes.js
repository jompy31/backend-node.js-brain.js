const categories = require('../routes/categories');
const products = require('../routes/products');
const users = require('../routes/users');
const auth = require('../routes/auth');
const search = require('../routes/search');
const machine_learning = require ('../routes/machine_learning');
const ejs = require("ejs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const error = require('../middleware/error');

module.exports = function(){
    app.set('view engine','ejs'); 
    app.engine('ejs', require('ejs').__express);
    app.use(bodyParser.urlencoded({ extended: true }));  
    app.use(express.json());
    app.use('/api/categories', categories);
    app.use('/api/products', products);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use('/api/search', search);
    app.use('/api/machine_learning', machine_learning);
    
    
    
    // this error middleware
    app.use(error);
}



