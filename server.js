var io = require('socket.io').listen(8888);

io.sockets.on('connection', function (socket) {
    socket.on('myevent', function (data) {
	socket.emit('myevent', data);
	socket.broadcast.emit('myevent', data); 
    });
});
