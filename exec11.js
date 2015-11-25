var http = require('http');

var server = http.createServer(function(request, response){
  var buffers = [], size=0;
  request.on('data', function(buffer){
    buffers.push(buffer);
    size += buffer.length;
  });

  request.on('end', function(){
    var bSum = Buffer.concat(buffers, size);
    response.end(bSum.toString().toUpperCase());
  });
});

server.listen(process.argv[2]);