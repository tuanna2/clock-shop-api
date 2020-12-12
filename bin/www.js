const http = require('http');
const app = require('../src/index');

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}, environment: ${process.env.APP_ENV}`);
});
