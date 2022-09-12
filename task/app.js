const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

require('dotenv').config();

// middleware

app.use(express.json())


//routes
app.get('/hello', (req, res) => {
    res.send('Task manager...');
});

app.use('/api/v1/tasks', tasks);

// single test:: get localhost:3000/api/v1/tasks/testando

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (e) {
        // console.error(e);
        // process.exit(1);
        console.log(e);
    }
}

start();