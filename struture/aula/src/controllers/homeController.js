exports.pageInitial = (req, res) => {
    res.render('index');
}

exports.sendMessage = (req, res) => {
    res.send(`
        <h1>Enviando a mensagem: ${req.body.nome}</h1>
    `);
}