const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: false,
    default: ''
  },
  email: {
    type: String,
    required: false,
    default: ''
  },
  numberPhone: {
    type: String,
    required: false,
    default: ''
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

});

const ContactModel = mongoose.model('Contact', ContactSchema);

function Contact(body) {
  this.body = body;
  this.errors = [];
  this.contact = null;
};

Contact.prototype.register = async function () {
  this.validate();

  if (this.errors.length > 0) return;

  this.contact = await ContactModel.create(this.body);


};

Contact.prototype.validate = function () {
  this.cleanUp();

  if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

  if (!this.body.name) this.errors.push('Nome é obrigatório!');
  if (!this.body.email && this.body.numberPhone) {
    this.errors.push('Preencha pelo menos um nome ou telefone!');
  }
};

Contact.prototype.cleanUp = function () {
  for (const key in this.body) {
    if (typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  this.body = {
    name: this.body.name,
    lastName: this.body.lastName,
    email: this.body.email,
    numberPhone: this.body.numberPhone
  };
}

Contact.prototype.edit = async function (id) {
  if (typeof id !== 'string') return;
  this.validate();
  if (this.errors.length > 0) return;
  this.contact = await ContactModel.findByIdAndUpdate(id, this.body, {
    new: true
  });
};

//methods statics :: sem this

Contact.searchById = async function (id) {
  if (typeof id !== 'string') return res.render('404');

  const user = await ContactModel.findById(id);

  return user;
}

Contact.searchByContacts = async function () {
  const contacts = await ContactModel.find()
    .sort({
      createdAt: -1
    });

  return contacts;
}

Contact.delete = async function (id) {
  if (typeof id !== 'string') return res.render('404');

  const contact = await ContactModel.findOneAndDelete({
    _id: id
  });

  return contact;
}

module.exports = Contact;