var http = require('http');
var count = 0;
function req(path, index){
  http.get(path, function(res){
    var buffers = [];
    var size = 0;
    res.on('data', function(chunk) {
      buffers.push(chunk);
      size += chunk.length;
    });
    res.on('end', function(err){
      count++;
      if(err){
        return console.error(err); 
      }
      result[index] = Buffer.concat(buffers, size);
      if(count==3){
        console.log(result[0].toString());
        console.log(result[1].toString()); 
        console.log(result[2].toString());
      } 
    });
  });  
}

var result = [];
req(process.argv[2], 0);
req(process.argv[3], 1);
req(process.argv[4], 2);

