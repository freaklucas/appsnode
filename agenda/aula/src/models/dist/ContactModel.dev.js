"use strict";

var mongoose = require('mongoose');

var validator = require('validator');

var ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: false,
    "default": ''
  },
  email: {
    type: String,
    required: false,
    "default": ''
  },
  numberPhone: {
    type: String,
    required: false,
    "default": ''
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
var ContactModel = mongoose.model('Contact', ContactSchema);

function Contact(body) {
  this.body = body;
  this.errors = [];
  this.contact = null;
}

;

Contact.searchById = function _callee(id) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(ContactModel.findById(id));

        case 2:
          user = _context.sent;

          if (!(typeof id !== 'string')) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.render('404'));

        case 5:
          return _context.abrupt("return", user);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

Contact.prototype.register = function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          this.validate();

          if (!(this.errors.length > 0)) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return");

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(ContactModel.create(this.body));

        case 5:
          this.contact = _context2.sent;

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this);
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
  for (var key in this.body) {
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
};

module.exports = Contact;