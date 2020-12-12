const { log } = require('../utils');

const logger = log('Request');

function logRequest(req, res, next) {
  const { method } = req;
  const fullPath = req.originalUrl;
  const body = req.body || [];
  logger.info(`Method: ${method} | FullPath: ${fullPath} | Body: ${JSON.stringify(body)}`);
  next();
}

module.exports = logRequest;
