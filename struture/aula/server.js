const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));


app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametros?', (req, res) => {
    
    // profiles/3
    // profiles/?chave1=valor1&cahve2=valor2

    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.get('/contact', (req, res) => {
    res.send('contact');
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});   // end listen

