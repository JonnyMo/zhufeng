/**
 *
 */

var http = require('http');
var url = require('url');
var mime = require('mime');
var fs = require('fs');

var data = [{name:'麻辣香锅', unit:'锅'},  {name:'红烧肉', unit:'盘'}, {name:'武汉热干面', unit:'碗'}];
var makeMenu = function(){
    var html = ['<ul>'];
    data.forEach(function(item){
       html.push('<li><a href="/menu/' + item.name +'?unit=' + item.unit + '">' +item.name + '</a></li>');
    });
    html.push('</ul>');
    return html.join();
};
var person = function(request, response){
    var urlObj = url.parse(decodeURIComponent(request.url), true);
    console.log(urlObj);
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if(urlObj.pathname == '/'){
        response.end(makeMenu());
    }else if(/\/menu\/.*$/.test(urlObj.pathname)){//处理菜的请求 /menu/麻辣香锅?unit=条
        if(urlObj.query){
            var sDinnerName = urlOb.pathname.slice('/menu/'.length);
            response.end("客官，-" + urlObj.query.unit + sDinnerName);
        }
    }else{//文件资源
        var filename = urlObj.pathname.slice(1);// /menu.js
        var contentype = mime.lookup(filename);
        response.setHeader("Content-Type", contentype);
        var reader = fs.createReadStream(filename);
        reader .on('data', function(chunk){
           response.write(chunk);
        });
        reader.on('error', function(){
            response.end();
        });
        reader.on('end', function(){
           response.end();
        });
    }
};

var server = http.createServer(person);

server.listen(8888, 'localhost', function(){
    console.log('服务器已经启动!');
});

