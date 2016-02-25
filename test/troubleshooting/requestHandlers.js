var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');
var socketio = require('socket.io'); 
var main = require("./main");

function start(response){
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

// function upload(response, postData){
//     console.log("Request handler 'upload' was called.");
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("You've sent: " + postData);
//     response.end();
// }


//A new function to display main html page
function mainFile(response){
    console.log("Request handler 'mainFile' was called.");
    fs.readFile(__dirname + '/index.html', function(err,data){
        if(err){
             response.writeHead(500,{"Content-Type": "text/html"});
             return response.end('Error loading index.html');
        }
    
        response.writeHead(200,{"Content-Type": "text/html"});
        response.write(data);
        response.end();
    })
}



exports.start = start;
// exports.upload = upload;
exports.mainFile = mainFile;