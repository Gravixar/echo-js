var http = require('http');
var https = require('follow-redirects').https;
var fs = require('fs');
require('dotenv').config()

http.createServer(function(request, response) {
  response.writeHead(200);
  request.on('data', function(message) {
    response.write(message);    

  request.on('end', function() {
    response.end();
  });
}).listen(process.env.ECHO_PORT);
