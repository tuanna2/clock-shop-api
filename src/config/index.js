const dev = require('./dev');
const prod = require('./prod');

require('dotenv').config();

const env = process.env.APP_ENV;

const config = {
  dev,
  prod,
};

module.exports = config[env];
