const mongoose = require('mongoose');

const connectDB = async (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;


// .then(() => console.log('Connect to database: ' + connectionString))
// .catch((err) => console.log('Error connecting to database: ' + err.message));    