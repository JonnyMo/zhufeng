var http = require('http');
var req = http.get(process.argv[2], function(res){
  var buffers = [];
  var size = 0;
  res.on('data', function(chunk) {
    buffers.push(chunk);
    size += chunk.length;
  });
  res.on('end', function(err){
    if(err){
      return console.error(err); 
    }
    var rs = Buffer.concat(buffers, size);
    console.log(size);
    console.log(rs.toString());
  });
});