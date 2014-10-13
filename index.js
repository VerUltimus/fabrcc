// var express = require("express");
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
// var port = Number(process.env.PORT || 8080);

// var app = express();
// app.use('/', express.static(__dirname+'/public'));

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

// app.listen(port);

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = Number(process.env.PORT || 8080)

app.use('/', express.static(__dirname+'/public'));

io.on('connection', function(socket){
    console.log('a user connected');

    socket.emit('connected', {});

    setInterval(function() {
        socket.emit('swole', {});
    }, 10000);

    socket.on('message', function(data) {
        console.log(data.content);
    });
});

http.listen(port, function(){
    console.log('listening on ' + port);
});