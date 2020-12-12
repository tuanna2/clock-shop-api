const jwt = require('jsonwebtoken');

/**
 * @params {object} data - payload
 * @params {string} key - secretOrPrivateKey
 * @params {string | number} expired - time expires in
 */
const signJWT = (data, key, expired) => {
  const token = jwt.sign(data, key, {
    algorithm: 'HS256',
    expiresIn: expired,
  });
  return token;
};

/**
 * @params {token} token - token jwt
 * @params {key} key - secretOrPrivateKey
 */
const verifyToken = (token, key) => {
  try {
    const data = jwt.verify(token, key);
    return {
      data, error: null,
    };
  } catch (e) {
    return { data: null, error: e };
  }
};

module.exports = {
  signJWT,
  verifyToken,
};
