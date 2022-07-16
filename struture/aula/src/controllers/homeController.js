exports.paginaInicial = (req, res) => {
  console.log(req.flash('success'), req.flash('error'), req.flash('info'));

  res.render('index', {
    title: 'Título da pagina',
    number: [0,1,2,3,4,5,6]
  });
  
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);

  return;
};
