var http = require('http');
var req = http.get(process.argv[2], function(res){
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log(chunk);
  });
});