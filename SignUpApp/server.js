const http = require('http');
const port = 1337;
const accountDetails = {
  name: 'First Name',
  email: 'user@email.com'
};
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(accountDetails)); 
});
server.listen(port, function () {
  console.log("Server listening on: http://localhost:%s", port);
});