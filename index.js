var http = require("http");
var ipport = (process.env.PORT || 3000);
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
}).listen(ipport);

console.log('Server running at http://127.0.0.1:'.concat(ipport,'/'));
