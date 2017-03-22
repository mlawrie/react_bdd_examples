const http = require('http');
const port = 1337;
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(); 
});
server.listen(port, function () {
  console.log("Server listening on: http://localhost:%s", port);
});