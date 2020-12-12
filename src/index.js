const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const { knex } = require('./utils');
const logRequest = require('./middleware/logRequest');
const Routes = require('./route/index');
const allowCors = require('./middleware/cors');

knex.raw('select 1+1 as result').catch((err) => {
  console.log(err);
  process.exit(1);
});
const app = express();
app.use(bodyParser.json());

app.use(helmet());
app.use((req, res, next) => logRequest(req, res, next));

const allowedOrigins = ['http://localhost:8000', 'http://127.0.0.1:8000'];
app.use(allowCors(allowedOrigins));

Routes.forEach((route) => {
  app[route.method](route.route, route.middleware ? route.middleware : [], (req, res) => route.action(req, res));
});

module.exports = app;
