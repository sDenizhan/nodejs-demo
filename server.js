var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080, function () {
    console.log('Sunucu Aktif');
});

app.get('/', function(req, res){
    res.sendFile(__dirname +'/index.html');
});

io.on('connection', function(socket){
    socket.on('news', function (data) {
        io.emit('news', data);
    });
});