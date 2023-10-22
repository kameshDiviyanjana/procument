const express = require("express");
const route = express.Router();
const {  
    addInvoice,
    getAllInvoices,
    deleteInvoice,
    getInvoice,
    updateInvoice
} = require('../controlle/InvoiceControlle');

route.post('/Add', addInvoice);
route.delete('/dele', deleteInvoice);
route.get('/Alldata', getInvoice);
route.put('/mod', updateInvoice);
route.get('/alinvoce', getAllInvoices);

module.exports = route;
