var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.send('Hello');
});

io.on('connection', function(socket) {
console.log('a user connected');
  socket.on('message',(data) => {
    console.log(data);
    socket.broadcast.emit('message-broadcast', data);
  })

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
    console.log('listening on 3000');
});
