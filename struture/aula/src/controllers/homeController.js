const HomeModel = require('../models/HomeModel');

HomeModel.create({
  title: 'Primeiro titulo',
  description: 'Primeira descrição'
})
  .then(data => console.log(data))
  .catch(e => console.log(e));


exports.paginaInicial = (req, res) => {
  res.render('index');
  
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);

  return;
};
