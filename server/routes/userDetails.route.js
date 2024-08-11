const express = require('express')
const AppointmentBook = require("../controller/userDetails.controller");

const userDetailsRouter = express.Router();

userDetailsRouter.post("/book", AppointmentBook)

module.exports = userDetailsRouter