var http = require("http");
var url = require('url');

function getRequest(time){
	
	return {
		    hour:time.getHours(),
	        minute: time.getMinutes(),
	        second: time.getSeconds()
	       }
}

function secondPoint(time){
	return { unixtime: time.getTime() };
}

var server = http.createServer(function(req,res){
	
    var urlinfo = url.parse(req.url, true);
    var timeinfo = new Date(urlinfo.query.iso);

    if(/^\/api\/parsetime/.test(req.url)){
    	var timeinfo = getRequest(timeinfo);
    }else if(/^\/api\/unixtime/.test(req.url)){
    	var timeinfo = secondPoint(timeinfo);
    }
    
   
    
	  if(timeinfo){
       res.writeHead(200, { 'Content-Type': 'application/json' });
       res.end(JSON.stringify(timeinfo));
      }else{
      	res.writeHead(404);
      	res.end();
      }
     })

server.listen(Number(process.argv[2]));