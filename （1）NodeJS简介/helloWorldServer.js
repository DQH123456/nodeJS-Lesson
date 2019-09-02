const http = require("http");

var server = http.createServer(function(red,res){
    res.write("hello world");
    res.end();
});

server.listen(8080);
console.log("server is listening 8080");