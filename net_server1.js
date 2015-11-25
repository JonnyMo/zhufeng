var net = require('net');
var server = net.createServer(function(socket){
  socket.on('data', function (data){
      socket.write('hello' + data);
  });

  socket.on('end', function(){
    console.log('断开');
  });
  socket.write('welcome \n');
});

server.listen(3001, function(){
  console.log('server bound');  
});