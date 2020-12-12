const Joi = require('@hapi/joi');
const { hash, compare } = require('bcryptjs');
const config = require('../config');
const {
  log, response, validate, jwt, knex,
} = require('../utils');
const { CommonError, AuthError } = require('../common/error');
const { MemberType } = require('../common/enum');
const { UserModel } = require('../model');

const logger = log('User Controller');
const userModel = new UserModel();

class UserController {
  async getUserInfo(req, res) {
    try {
      let result;
      await knex.transaction(async (transaction) => {
        result = await userModel.getOne(transaction, { id: req.user.id });
        if (!result) {
          throw AuthError.USER_NOT_FOUND;
        }
        await userModel.update(transaction, { id: result.id }, { lastLogin: new Date() });
        delete result.password;
      });
      return res.jsonp(response.success(result));
    } catch (error) {
      logger.error(error);
      return res.jsonp(response.error(error || CommonError.UNKNOWN_ERROR));
    }
  }

  async createUser(req, res) {
    const valid = Joi.object({
      username: Joi.string().required().max(255),
      password: Joi.string().required(),
      avatar: Joi.string().max(2000),
      memberType: Joi.valid(MemberType.MANAGER, MemberType.SALER).required(),
      fullname: Joi.string().max(255),
    });
    try {
      const params = validate.checkValid(valid, req.body);
      let result;
      await knex.transaction(async (transaction) => {
        const checkExist = await userModel.getOne(transaction, { username: params.username });
        if (checkExist) {
          throw AuthError.USER_EXISTING;
        }
        params.password = await hash(params.password, config.auth.saltRounds);
        const user = await userModel.add(transaction, params);
        const token = jwt.signJWT(
          { id: user[0], username: params.username, memberType: params.memberType },
          config.auth.tokenKey,
          config.auth.tokenExpireTime,
        );
        delete params.password;
        result = { user: { id: user[0], ...params }, token };
      });
      return res.jsonp(response.success(result));
    } catch (error) {
      logger.error(error);
      return res.jsonp(response.error(error || CommonError.UNKNOWN_ERROR));
    }
  }

  async login(req, res) {
    const valid = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    try {
      const params = validate.checkValid(valid, req.body);
      let result;
      await knex.transaction(async (transaction) => {
        const user = await userModel.getOne(transaction, { username: params.username });
        if (!user) {
          throw AuthError.USER_NOT_FOUND;
        }
        if (user.softDelete) {
          throw AuthError.ACCOUNT_DELETE;
        }
        const comparePassword = await compare(params.password, user.password || '');
        if (!comparePassword) {
          throw AuthError.LOGIN_WRONG_PASSWORD;
        }
        await userModel.update(transaction, { id: user.id }, { lastLogin: new Date() });
        const token = jwt.signJWT(
          { id: user.id, username: user.username, memberType: user.memberType },
          config.auth.tokenKey,
          config.auth.tokenExpireTime,
        );
        delete user.password;
        result = { user, token };
      });
      return res.jsonp(response.success(result));
    } catch (error) {
      logger.error(error);
      return res.jsonp(response.error(error || CommonError.UNKNOWN_ERROR));
    }
  }
}

module.exports = UserController;
