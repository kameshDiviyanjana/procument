const express = require("express");
const route = express.Router();

const { addorderz,
    getAllPur,
    delteorder,
    getdelivary,
    updateOrd} = require("../controlle/DeliverControlle")


    route.post('/Adddelivary',addorderz)
    route.delete("/deltedelivary/:id",delteorder)
    route.put('/up/:id',updateOrd)
    route.get('/',getAllPur)
    route.get("/se/:id", getdelivary);


    module.exports = route;


