exports.paginaInicial = (req, res) => {
  req.session.user = {
    name: 'Lucas',
    loggad: true
  };
  res.render('index');
  
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);

  return;
};
