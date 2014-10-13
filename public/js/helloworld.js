$(function() {
    var socket = io();
    console.log(this);
    console.log("hi~");

    socket.on('connected', function(data) {
        console.log("Connected to server.");
    });

    socket.on('swole', function(data) {
        var swoleNotif = new Notify('Swole!', {
            body: "IT'S TIME TO GET SWOLE, GET ON THE FLOOR, GOGOGO!!!",
            timeout: 5
        });
        if (!Notify.needsPermission) {
            swoleNotif.show();
        }
        console.log("swole.");
    });

    if (Notify.isSupported) {
      console.log("Notifications are supported!");
    }
    else {
      console.log("Notifications are not supported for this Browser/OS version yet.");
    }

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