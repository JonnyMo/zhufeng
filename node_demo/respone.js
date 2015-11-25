var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
    var urlObj = url.parse(request.url);
    console.log(urlObj);
    var filename = urlObj.pathname;
    var queryStr = urlObj.query;

    if(pathname == '/'){
        pathname = '/index.html';
    }else if(pathname == '/ajax'){
        response.setHeader("content-type", "application/x-javascript");
        response.end("{title: '标题111111', text:'内容'}");
    }else{
        loadLocla(filename, response);
    }
});


function loadLocla(filename, response){
    fs.readFile(filename.substring(1), 'utf8', function(error, data){
        if(error){
            response.writeHead(404);
            response.end('not found!');
        }else{
            response.end(data);
        }
    });
}

server.listen(8080);