var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');


function start(request, response){
	console.log("Request handler 'login' was called.");
    
    fs.readFile(__dirname	 + '/userlogin.html', function(err, data){
        if(err){
            response.writeHead(500,{"Content-Type": "text/html"});
            return response.end('Error loading login.html');
        }
    

        response.writeHead(200,{"Content-Type": "text/html"});
    	response.write(data);
    	response.end();
    });  
}    

exports.start = start