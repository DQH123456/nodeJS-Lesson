const http = require("http");
const fs = require("fs");
//const url = require("url");

var server = http.createServer(function(req,res){
    // var urlObj = url.parse(req.url);
    // var urlPathName = urlObj.pathname;
    // console.log(urlPathName);     
    var htmlPath = __dirname+"\\views\\view.html";
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
});
server.listen(8080);
console.log("server is listening 8080");