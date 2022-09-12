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

exports.checkCsrfError = function (err, req, res, next) {
    if (err && 'EBADCSRFTOKEN' === err.code ) {
        return res.render('404');
    }
}

exports.csrfMiddleware = function (req, res, next) {
    res.locals.csrfToken = req.csrfToken();
    next();
}
