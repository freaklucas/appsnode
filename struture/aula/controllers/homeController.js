exports.pageInitial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
}

exports.sendMessage = (req, res) => {
    res.send(`
        <h1>Enviando a mensagem: ${req.body.nome}</h1>
    `);
}