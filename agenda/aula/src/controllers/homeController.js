const Contact = require('../models/ContactModel');

exports.index = async (req, res) => {
  const contacts = await Contact.searchByContacts();

  res.render('index', {contacts});
};