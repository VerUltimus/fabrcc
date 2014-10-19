// requirejs

// require(['bot_config'], function(bots) {
    $(function() {
        var socket = io();
        console.log(this);
        console.log("hi~");

        socket.on('connected', function(data) {
            console.log("Connected to server.");
        });

        setup(socket);

        function send(message) {
            socket.emit('message', { content: message });
        }

        // Notification stuffs
        if (Notify.needsPermission) {
            console.log("here");
            $("body").append('<button id="permission">Get Permission</button>');
        }

        $('#permission').click(function(e) {
            Notify.requestPermission();
        });
    });
// });