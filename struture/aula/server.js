const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('sending msg...')
})

app.get('/contact', (req, res) => {
    res.send('contact');
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});   // end listen

