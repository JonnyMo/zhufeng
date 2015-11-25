var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  var reader = fs.createReadStream(process.argv[3]);
  reader.pipe(response);
});
server.listen(process.argv[2]);