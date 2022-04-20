const express = require("express");
const mongo = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const app = express();

app.post("/trip", (req, res) => {});
app.get("/trips", (req, res) => {});

app.post("/expense", (req, res) => {});
app.get("/expenses", (req, res) => {});

app.listen(3000, () => console.log("Server ready"));

let db;

mongo.connect(url, {
  userNewParser: true,
  useUnifiedTopology: true,
},
(err, client)) => {
    if(err) {
        console.log(err)
    }
    db = client.db("tripconst");
};
