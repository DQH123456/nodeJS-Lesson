var arg = process.argv[2];
if (arg == undefined ){
    console.log("参数未定义");
}
else if(arg == "-h"){
    console.log("传入参数错误");
} 
else{
    var result = eval(arg);
    console.log(arg+"=%s",result)
}