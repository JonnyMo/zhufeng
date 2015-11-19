var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var path = require('path');

function start (req, res){
    var url = req.url;
    var fileContent = null;
    var filename = null;
    if(url == '/'){
        res.writeHead({"content-type":"text/html; charset=utf-8"});
        sendFile('.', 'upload.html', res);
    }else if(url == '/upload'){
        res.writeHead({"content-type": "text/javascript; charset=utf8"});
        var parser = new formidable.IncomingForm();
        var arr = [], rsArr=[];
        parser.parse(req, function(err, fields, files){
            for(var fieldName in files){
                arr.push(files[fieldName]);
            }
            for(var i= 0, len = arr.length; i<len; i++){
                (function(i){
                    var isLast = i == len-1;
                    writeFile(arr[i], function(filename){
                        rsArr.push(filename);
                        if(isLast){
                            res.end(JSON.stringify(rsArr));
                        }
                    });
                })(i);
            }
        });
    }else{
        filename = url.replace(/^\//, "");
        fs.exists(filename , function(exists){
            if(exists){
                sendFile(".", filename, res);
            }
        });
    }
}

function writeFile(file, fn){
    var reader, writer, tmp=[], total=0;
    reader = fs.createReadStream(file.path);
    writer = fs.createWriteStream(file.name);
    reader.on("data", function(chunk){
        tmp.push(chunk);
        total+=chunk.length;
    });

    reader.on('end', function(){
        writer.end(Buffer.concat(tmp, total));
    });

    writer.on('finish', function(){
        fn("/" + file.name);
    });
}


function sendFile(dir, name, res){
    var arr = [], totalLen=0;
    var reader = fs.createReadStream(path.join(dir, name));
    reader.on('data', function(chunck){
        if(chunck){
            totalLen += chunck.length;
            arr.push(chunck);
        }
    });

    reader.on('end', function(){
        res.write(Buffer.concat(arr, totalLen));
        res.end();
    });
}

var server = http.createServer(start);
server.listen(8888, 'localhost');