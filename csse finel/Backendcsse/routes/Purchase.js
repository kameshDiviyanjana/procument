const express = require("express");
const route = express.Router();

const { addorder,
    getAllPur,
    delteorder,
    getEmpAttendanceByID,
    updateOrd} = require("../controlle/PurchaseControll")


    route.post("/add",addorder);
    route.get("/",getAllPur);
    route.delete("/:id",delteorder);
    route.put("/:id",updateOrd);
    route.get("/:id", getEmpAttendanceByID);

    module.exports = route;

