var server = require("./main");
var router = require('./router');
var requestHandlers = require('./requestHandlers');
var socketio = require('socket.io');  

var handle = {};
handle['/'] = requestHandlers.start;
handle['/login'] = requestHandlers.start;
handle['/index'] = requestHandlers.mainFile;


server.start(router.route, handle);

//io file

var io = socketio(app);

// io.on('connection', function (socket) {
   
//     socket.on('chat', function (data) {
//         console.log(data);

//         io.emit('sendmsg', data); 
//     });
// });

io.on('connection', function (socket) {
    //receive name info from client side
    socket.on('name', function (nameinfo){
        console.log(nameinfo);
        
        io.emit('sendname', nameinfo);
    });


    socket.on('chat', function (data) {
        console.log(data);

        io.emit('sendmsg', data); 
    });
});
console.log("Server is running at http://localhost:8888")

