const BaseModel = require('./base_model');

const tableName = 'user';

class UserModel extends BaseModel {
  constructor() {
    super(tableName);
  }
}

module.exports = UserModel;
