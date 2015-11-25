var http = require('http');
var url = require('url');

function parseTime(oDate){
  return  {
    "hour":   oDate.getHours(), 
    "minute": oDate.getMinutes(),
    "second": oDate.getSeconds()
  };
}

function unixTime(oDate){
  return {"unixtime": oDate.getTime()}
}

var server = http.createServer(function(request, response){
  //注意这里的第二个参数。。。。
  var oUrl = url.parse(request.url, true);
  var oQuery = oUrl.query;
  response.writeHead(200, {'Content-Type':'application/json'});
  if(!oQuery.iso){
    response.end('非法访问!');
    return;
  }
  var oDate = new Date(oQuery.iso);
  
  if(/^\/api\/parsetime/.test(oUrl.path)){
    oRes =parseTime(oDate);
  }else if(/^\/api\/unixtime/.test(oUrl.path)){
    oRes = unixTime(oDate);
  }
  response.end(JSON.stringify(oRes));
});

server.listen(process.argv[2]);