require("dotenv").config();
const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.HOST);
        console.log("Conexão bem sucedida!");
    }
    catch(error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;