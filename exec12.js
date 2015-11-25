var http = require('http');
var url = require('url');



var server = http.createServer(function(request, response){
  var oUrl = url.parse(request.url);
  var aParams = oUrl.query.split('&');
  var oJson = {}, oRes;
  for(var i=0, len=aParams.length, pair; i<len; i++){
    pair = aParams[i].split('=');
    oJson[pair[0]] = pair[1];
  }
  response.writeHead(200, {'Content-Type':'application/json'});
  if(!oJson.iso){
    response.end('非法访问!');
  }
  var oDate = new Date(oJson.iso);
  if(/^\/api\/parsetime/.test(oUrl.path)){
    oRes = {
      "hour":   oDate.getHours(), 
      "minute": oDate.getMinutes(),
      "second": oDate.getSeconds()
    };
  }else if(/^\/api\/unixtime/.test(oUrl.path)){
    oRes = {"unixtime": oDate.getTime()};
  }
  response.end(JSON.stringify(oRes));
});

server.listen(process.argv[2]);