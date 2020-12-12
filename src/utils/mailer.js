const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport(config.nodeMailer);

/**
 * @property {string[]} to - list of receivers
 * @property {string} subject - title mail
 * @property {string} html - content mail
 * @property {?string} cc - cc
 * @property {?string} bcc - bcc
 */
const sendMail = async (mailOption) => {
  const option = {
    from: config.nodeMailer.auth.user, // sender address
    to: mailOption.to, // list of receivers
    subject: mailOption.subject,
    html: mailOption.html,
    cc: mailOption.cc,
    bcc: mailOption.bcc,
  };
  return transporter.sendMail(option);
};

module.exports = {
  sendMail,
};
