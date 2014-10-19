module.exports = function(socket) {

    setInterval(function() {
        socket.emit('swole', {});
    }, 10000);
    
};