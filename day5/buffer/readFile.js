var fs = require('fs');
fs.readFile('./file.txt', "utf8",  function(error, data){
   console.log(data);
});