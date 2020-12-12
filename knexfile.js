require('dotenv').config();

module.exports = {
  client: process.env.DB_CONNECTION,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
  migrations: {
    tableName: 'migrations',
  },
  // debug: ['ComQueryPacket']
};
