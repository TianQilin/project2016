var server = require("./main");
var router = require('./router');
var requestHandlers = require('./requestHandlers');


var handle = {};
handle['/'] = requestHandlers.start;
handle['/login'] = requestHandlers.start;
handle['/main'] = requestHandlers.main;

server.start(router.route, handle);