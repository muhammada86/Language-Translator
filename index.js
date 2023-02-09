require("dotenv").config()
require("express-async-errors")
const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.use(express.json())

app.use("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running"
    })
})

module.exports = app
