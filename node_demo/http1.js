var http = require('http');

var server = http.createServer(function(request, response){
    response.end('中文内容');
});

server.listen(8080);
