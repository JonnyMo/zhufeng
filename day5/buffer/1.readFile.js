var fs = require('fs');
/**
 * <Buffer 61 73 64 66 20 6c 61 6a 64 73 20 66 20 73 61 64 6c 66 20 6a 73 61 64 20 6
 6 0d 0a 61 64 73 66 6c 6b 64 73 61 6a 66 0d 0a 61 73 64 20 6c 64 73 61 20 66 ...
 >
  后面的数字都是 16进制的数字
 */
/*
fs.readFile('./file.txt', function(err, data){
    console.log(data);
});


//创建Buffer 对象的三种方法
//指定buffer长度
var buf1 = new Buffer(12);

buf1.fill(0,0,3);// 从哪个索引开始到哪个索引结束，填充什么zhi
console.log(buf1);

//通过数组创建
var buf2 = new Buffer([15, 16, 17]);
console.log(buf2);

//通过字符串来创建buffer
var buf3= new Buffer("翼课网");
console.log(buf3);

var buf = new Buffer('珠峰培训');
console.log(buf);

var fs = require('fs');
*/


/**
 *
 * @param src
 * @param targetStart
 * @param sourceStart
 * @param sourceEnd
 */
Buffer.prototype.cp =function (target, sourceStart, sourceEnd, targetStart, targetEnd){
    if(isNaN(sourceStart) || isNaN(sourceEnd)
        || isNaN(targetStart) || isNaN(targetEnd)){
        throw Error('参数必须是 数字');
    }else{
         if(sourceEnd < sourceStart){
             throw Error( 'sourceStart: ' + sourceStart +' 必须小于 ' + 'sourceEnd: ' + sourceEnd);
         }else if(targetEnd < targetStart){
             throw Error( 'targetStart: ' + targetStart +' 必须小于 ' + 'targetEnd: ' + targetEnd);
         }
    }

    for(var i=targetStart, n=0; i<targetEnd; i++){
        target[i] = this[n++];
    }
}
var buf1 = new Buffer('高峰');
var buf2 = new Buffer('珠峰培训');
buf1.cp(buf2, 0, 6);
console.log(buf2.toString());
console.log('===========');
