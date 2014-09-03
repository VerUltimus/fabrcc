var app = require("express")();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = Number(process.env.PORT || 5000);
app.listen(port);

app.get("/", function(req, res) {
    res.send("#yoloswagrekt");
});