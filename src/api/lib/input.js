const validator = require('validator');

exports.sanitizeInput = function (input) {
  return validator.escape(input);
};

exports.validateEmail = function (input) {
  if (!validator.isEmail(input)) throw Error('Input is not an email');
};
