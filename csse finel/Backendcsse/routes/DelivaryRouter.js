const express = require("express");
const route = express.Router();

const { addorderz,
    getAllPur,
    delteorder,
    getdelivary,
    updateOrd} = require("../controlle/DeliverControlle")


    route.post('/Adddelivary',addorderz)
    route.delete("/deltedelivary/:id",delteorder)
    route.put('/:id',updateOrd)
    route.get('/',getAllPur)
    route.get("/:id", getdelivary);


    module.exports = route;


