/**
 * 学习使用异步读取文件的api
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
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if(urlObj.pathname == '/'){
        response.end(makeMenu());
    }else if(/\/menu\/.*$/.test(urlObj.pathname)){//处理菜的请求 /menu/麻辣香锅?unit=条
        if(urlObj.query){
            var replace = "客官，-" + urlObj.query.unit + urlObj.pathname.slice('/menu/'.length),
            reader = fs.createReadStream('menu.html'),
            arr = [], total= 0, html;

            reader .on('data', function(chunk){
                arr.push(chunk);
                total += chunk.length;
            });
            reader.on('end', function(){
                html = Buffer.concat(arr, total).toString().replace("@@@@", replace);
                response.end(html);
            });
            reader.on('error', function(){
                response.end();
            });
        }
    }else if("/clock" == urlObj.pathname){
        response.end(new Date().toLocaleTimeString());
    }else{//文件资源
        var reader = fs.createReadStream(urlObj.pathname.slice(1));
        response.setHeader("Content-Type", mime.lookup(filename));
        reader .on('data', function(chunk){
            response.write(chunk);
        });
        reader.on('error', function(){
            response.statusCode = 404;
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

