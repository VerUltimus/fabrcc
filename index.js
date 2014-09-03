var app = require("express")();
var port = Number(process.env.PORT || 5000);
app.listen(port);

app.get("/", function(req, res) {
    res.send("#yoloswagrekt");
});