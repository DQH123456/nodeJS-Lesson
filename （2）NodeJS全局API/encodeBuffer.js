var username = process.argv[2];
var password = process.argv[3];

if(username !=undefined &&password != undefined){
    var loginStr = "用户名:"+username+"密码:"+password;
    var buf = Buffer.from(loginStr,"utf-8");
    console.log(buf);
    var data64Str = buf.toString("base64");
    console.log("base64加密:"+data64Str);
}
else{
    console.log("用户名和密码不能为空");
}