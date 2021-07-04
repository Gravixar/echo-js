var http = require('http');
var port = 8080;

http.createServer(function(request, response) {
  response.writeHead(200);
  request.on('data', function(message) {
    response.write(message);
  });

  request.on('end', function() {
    response.end();
  });
}).listen(port);
