var net = require('net');
Date.prototype.formateDate = function (fmt){
  var o ={
    "M+": this.getMonth()+ 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "S" : this.getMilliseconds() 
  };

  if(/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4-RegExp.$1.length));
  }

    for(var k in o){
      if(new RegExp("("+ k +")").test(fmt)){
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
      } 
    }
    return fmt; 
}

var server = net.createServer(function(socket){
  var oDate = new Date();
  socket.write(oDate.formateDate('yyyy-MM-dd hh:mm'));
  socket.write('\n');
  socket.end();
});



server.listen(process.argv[2], function(){
  console.log('server bound');  
});

