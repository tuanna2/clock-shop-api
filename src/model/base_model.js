class BaseModel {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async getOne(transaction, params) {
    return transaction(this.tableName).where(params).select('*').first();
  }

  async getAll(transaction, params, pageSize, pageIndex) {
    return transaction(this.tableName).where(params).select('*')
      .limit(pageSize)
      .offset(pageIndex);
  }

  async add(transaction, data) {
    return transaction(this.tableName).insert(data);
  }

  async update(transaction, conditions, params) {
    return transaction(this.tableName).where(conditions).update(params);
  }

  async deleteId(transaction, id) {
    return transaction(this.tableName).where({ id }).del();
  }

  async count(transaction, data) {
    return transaction(this.tableName).where(data).count('id');
  }
}
module.exports = BaseModel;
