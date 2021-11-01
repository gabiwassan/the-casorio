const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : '';
  data.group = !isEmpty(data.group) ? data.group : '';
  data.phone = !isEmpty(data.phone) ? data.phone : '';
  data.family = !isEmpty(data.family) ? data.family : false;

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  // group checks
  if (Validator.isEmpty(data.group)) {
    errors.group = 'group field is required';
  }
  // phone checks
  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'El teléfono es requerido';
  }

  if (!Validator.isLength(data.phone, {min: 9, max: 10})) {
    errors.phone = 'El teléfono debe tener 10 nros';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
