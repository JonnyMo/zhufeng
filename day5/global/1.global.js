/**
 *  全局对象
 *  global 全局变量的宿主
 *  1.global.name  全局对象属性
 *  2.未定义直接赋值的变量也变成global 的属性
 *
 *  全局对象和去那句变量的关系
 *
 *  永远要使用 var 来定义变量，不然那会污染全局命名空间
 *  在模块内部声明的变量属于模块本身， 不属于全局变量
 *
 *  伪全局变量   为什么不是 global身上的属性？
 *  __filename
 *  __dirname
 *  假设是globa身上的属性，那么值就应该一样的，很明显，如果一样的话，就挂了
 *
 */

console.log(__filename);
console.log(__dirname);
/*

function (__filename, __dirname){
    console.log(__filename);//都是方法的参数
    console.log(__dirname);//都是方法的参数
}
*/
console.log("==================");

/**
 * 进程对象
 * argv 参数
 * 环境变量， 作为配置信息，不用修改代码，直接读取配置信息
 * 如获取：
 * process.env.denv
 *
 * 在控制台下设置 env.denv 的值 :
 *  set env.denv = /www/db_dev/
 *
 * pid: 表示进程的id
 *r
 *
 */
console.log("+++++++++++++++++++++");
console.log("+++++++++++++++++++++");
console.log(process);
console.log("==================");
console.log(process.argv);
console.log("==================");
console.log(process.env);
console.log("==================");
console.log("process.env.Path: ", process.env.Path);

process.stdin.on('data', function(data){
    process.stdout.write("read", data);
});



/**
 * __dirname 和 cwd 的区别
 * cdw 可以修改 __dirname 不会变
 */
console.log(process.__dirname);
console.log(process.cwd());
process.chdir("..");
console.log(process.cwd());
console.log(process.__dirname);


/**
 * 内存使用量
 * bytes 字节为单位
 *
 * rss: 17297408，常驻内存
 * heapTotal： 9275392，堆的总量
 * heapUsed： 4140872 堆的使用量
 */

/*
console.log(process.memoryUsage);
var arr = [];
while(true){
    arr.push(new Buffer(1024 * 1024));
}
*/


