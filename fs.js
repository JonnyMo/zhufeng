var fs = require('fs');
var data = [];

console.log("sync read start");
var str = fs.readFileSync('./sum.js', 'utf8');
console.log("sync read end");

console.log("async read start");
fs.readFile('./sum.js', 'utf-8', function(error, chunk){
    if(error){
        console.log(error);
    }else{
        //打印的buffer是一个 16进制的asc 码表
        //data.push(chunk);
        console.log("async read end....");
    }
});
