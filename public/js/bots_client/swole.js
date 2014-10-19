function setup(socket) {
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
}