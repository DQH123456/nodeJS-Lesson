console.time("test");

function loop(){
    console.log("I will loop forever!");
}

var sed=setInterval(loop,500);

setTimeout(function Timeout(){
    clearInterval(sed);
    console.log("Game over");
},5000)

console.timeEnd("test");