const { response, jwt } = require('../utils');
const { AuthError } = require('../common/error');
const config = require('../config');

const checkLogin = (req, res, next) => {
  let token = req.headers.authorization || '';
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (!token) {
    return res.jsonp(response.error(AuthError.TOKEN_NOT_FOUND));
  }
  const { data, error } = jwt.verifyToken(token, config.auth.tokenKey);
  if (error) {
    return res.jsonp(response.error(error));
  }
  req.user = data;
  return next();
};

const allowMemberType = (memberType) => (req, res, next) => {
  if (memberType.includes(req.user.memberType)) {
    return next();
  }
  return res.jsonp(response.error(AuthError.USER_NOT_PERMISSION));
};

module.exports = {
  checkLogin,
  allowMemberType,
};
