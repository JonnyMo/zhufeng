/**
 * 1.readFile readFileSync 把文件读入到缓存区 中间不能做别的事情
 *  writeFile writeFillSync 问文件写到缓存区
 *
 * 2.read 把文件中的数据一小块一小块读入缓存，最后从缓存中读取
 *
 * write
 *
 * 3.有时候我们不关心文件的内容，只关心是否能读取到数据
 *
 * 流 是一组有序的，有起点和终点的传输手段
 * 网络传输中，总是先把对象转成字节流
 * 再通过流的传输，传递到目的地， 再转成原始数据
 *
 */

console.log(__dirname);
console.log(__filename);

var fs = require('fs');
/**fs.createReadStream
 * path
 * options：
 * flags r
 * encoding null
 * autoclose 是否读取完毕或出错时关闭文件描述符
 * start  文件的开始位置
 * end 文件的结束位置
 */
var reader = fs.createReadStream('./msg.txt', {start:3, end:6});
reader.on('open', function(){
    console.log('file open');
});

reader.on('data', function(err, data){
    console.log('data: ', data);
});

reader.on("end", function(){

});


