const express = require("express");
const route = express.Router();

const { addorder,
    getAllPur,
    delteorder,
    getEmpAttendanceByID,
    updateOrd} = require("../controlle/PurchaseControll")


    route.post("/add",addorder);
    route.get("/as",getAllPur);
    route.delete("/:id",delteorder);
    route.put("update/:id",updateOrd);
    route.get("/ser/:id", getEmpAttendanceByID);

    module.exports = route;

