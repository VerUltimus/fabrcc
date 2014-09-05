var app = require("express")();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = Number(process.env.PORT || 8080);

app.use('/', express.static(__dirname+'/public'));

app.listen(port);
