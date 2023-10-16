const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const dbConnection = require("./config/Db");
require("dotenv").config();

const app = express();
dbConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use('*',cors())
app.use("*",cors())

app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻" });
});

app.use("/order", require("./routes/Purchase"));
app.use("/deleivary", require("./routes/DelivaryRouter"));
app.use("/invoics", require("./routes/Invoicerouter"));
app.use("/manager", require("./routes/ManagerRoutes"));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
