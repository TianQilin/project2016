var http = require("http");
var fs = require('fs');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'content-type': 'textplain'});
    dst = fs.createReadStream(process.argv[3]);
     dst.pipe(response);
})

server.listen(Number(process.argv[2]));