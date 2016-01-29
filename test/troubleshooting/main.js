var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received");
		route(handle, pathname, response, request);
    }
    
   app = http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}
//iofile
var io = socketio(app);

io.on('connection', function (socket) {
   
    socket.on('chat', function (data) {
        console.log(data);

        io.emit('sendmsg', data); 
    });
});

console.log("Server is running at http://localhost:8888")

exports.start = start;