const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())

app.use(express.json())

const connect = require("./db/connect");
connect();


app.listen(3000, function () {
    console.log("Server listen...")
});

