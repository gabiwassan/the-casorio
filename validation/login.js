const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  // data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : '';

  // Email checks
  // if (Validator.isEmpty(data.email)) {
  //   errors.email = "Email field is required";
  // }
  // phone checks
  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'El teléfono es requerido';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
