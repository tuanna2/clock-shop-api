const { CommonError } = require('../common/error');

const checkValid = (valid, data) => {
  const { error, value } = valid.validate(data);
  if (error) {
    throw CommonError.INVALID_INPUT_PARAMS;
  } else {
    return value;
  }
};

module.exports = {
  checkValid,
};
