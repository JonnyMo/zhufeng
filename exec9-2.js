var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){
  var oDate = new Date();
  socket.write(strftime('%F %H:%M', oDate));
  socket.write('\n');
  socket.end();
});

server.listen(process.argv[2], function(){
  console.log('server bound');  
});

