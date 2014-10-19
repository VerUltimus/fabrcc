module.exports = {
    // List of bot files (without directory path and extension).
    list : [
        'swole'  
    ],

    // Registers all bots.
    registerAll : function(socket) {
        for (var i = 0; i < this.list.length; i++) {
            path = './bots_server/' + this.list[i];
            require(path)(socket);
        }
    }
};