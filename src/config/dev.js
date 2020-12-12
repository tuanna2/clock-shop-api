require('dotenv').config();

module.exports = {
  auth: {
    tokenKey: 'motconmuadiqua',
    saltRounds: 10,
    tokenExpireTime: 2592000, // 1 month (s)
  },
  nodeMailer: {
    host: process.env.HOST_MAIL,
    port: process.env.PORT_MAIL,
    secure: true,
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PASS_MAIL,
    },
  },
};
