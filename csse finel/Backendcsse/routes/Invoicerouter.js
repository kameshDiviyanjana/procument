const express = require("express");
const route = express.Router();
const {  addorderz,
    getAllPur,
    delteorder,
    getdelivary,
    updateOrd} = require('../controlle/InvoiceControlle')


route.post('/Add',addorderz)
route.delete('/dele',delteorder)
route.get('/Alldata',getdelivary)
route.put('/mod',updateOrd)
route.get('alinvoce',getAllPur)
module.exports = route;