const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

route.get('/',homeController.pageInitial);
route.post('/', homeController.sendMessage);

route.get('/contacts', contactController.pageContacts);

module.exports = route;