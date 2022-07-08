exports.middlewareGlobal = (req, res, next) => {
    console.log();
    
    if(req.body.client) {
        req.body.client = req.body.client.replace('Lucas', 'NÃO USE LUCAS');
        console.log(`Nome É: ${req.body.client}`);
        console.log();
    }

    console.log('Passando pelo middleware global');

    next();

}