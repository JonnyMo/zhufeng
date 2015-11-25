/**
 * Buffer 缓存区 暂时存放在内存里的一段数据
 * JS语言只支持字符串类， 没有二进制
 * 在处理tcp 和文件流时，必须使用二进制
 * 和数组非常像
 * 有一个【八位=1字节】元素组成的数组
 *
 */

//创建buffer 的三种方法
//指定buffer 长度
var buf1 = new Buffer(12);
console.log(buf1);
buf1.fill(112, 0, 12);
console.log(buf1);

//通过数组创建
var buf2 = new Buffer([15, 16, 17]);
console.log(buf2);

//通过字符串来创建
var buf3 = new Buffer('珠峰培训');
console.log(buf3);

//长度问题
var str ='珠峰培训';
var buf4 = new Buffer(str);
console.log(str.length);
//buffer 的长度是字节的长度，因为一个buffer中的一个元素，就是一个字节
console.log(buf4.length);

str[0] = '我';
buf4[0]=1;
console.log(str);
console.log(buf4);
console.log(buf4.toString());

//slice
var substr = str.slice(1,2);
console.log(substr);
var subbuf = buf4.slice(1,2);
console.log(subbuf);
subbuf[0] = 100;
console.log(subbuf);

//字符串和buffer 之间如何转换
var buf = new Buffer('珠峰培训');
var buf2 = new Buffer('最后一次');
console.log(buf);
console.log(buf2);

//<Buffer e7 8f a0 e5 b3 b0 e5 9f b9 e8 ae ad>
var buf1 = new Buffer([ 0xe7, 0x8f, 0xa0, 0xe5, 0xb3, 0xb0, 0xe5, 0x9f]);
var buf2 = new Buffer([0xb9, 0xe8, 0xae, 0xad]);
console.log(buf1.toString());
console.log(buf2.toString());

Buffer.concat([buf1, buf2], 12);
console.log(Buffer.concat([buf1, buf2],12).toString());

//上传一个很长的文本内容时，很有必要用次方法
var StringDecoder = require('string_decoder').StringDecoder;
var decoder1 = new StringDecoder();
var decoder2 = new StringDecoder();
console.log(decoder1.write(buf1));
console.log(decoder1.write(buf2));
console.log(decoder1.toString());
console.log(decoder2.write(buf1));
console.log(decoder2.write(buf2));
console.log(decoder2.toString());

console.log(Buffer.isBuffer({}));//false
console.log(Buffer.byteLength('珠峰'));
console.log(Buffer.isEncoding("utf8"));
console.log(Buffer.isEncoding("gbk"));





