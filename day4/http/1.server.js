/**
 *
 */

var http = require('http');
var server = http.createServer(function(req, res){
    res.setHeader("Content-Type","text/html; charset=utf-8");
    res.end('内容');
});

server.listen(8888, '192.168.1.120', function(){
    console.log('server started');
});