var http = require('http');

var server_ = http.createServer(function(request, response){
  
  var data = null;
  request.on('data', function(data){
    data = data.toString();    
  });

  request.on('end', function(){
    response.writeHead(200, {'Content-Type':'text/plain'});
    console.log(data);
    response.write(data.toUpperCase());
    response.end();
  });

});

server_.listen(3001, function(){
  console.log('server start');
});



