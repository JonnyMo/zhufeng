var net = require('net');
//创建一个服务器
var server = net.createServer();
function getType(obj){
  return Object.prototype.toString.call(obj);
}
server.on('connection', function(socket){
  socket.on('data', function(buffer){
    console.log(buffer.toString('utf-8'));
  });

  socket.on('error', function(err){
      console.error(err);
  });
});
//监听3000端口
server.listen(3001, function(){
    console.log('server start....');
});