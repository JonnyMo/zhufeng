/**
 * Created by lenovo on 2015/11/3.
 */
console.log(123);

//第一个常用的global 属性
console.log(__dirname);

//第二个__filename， 带完整路径的文件名
console.log(__filename);

console.info('info');
console.error("error");

//current working dir 运行 node命令时所在的目录
console.log(global.process.cwd());

console.log('===============');
process.stdout.write('stdout.write');

console.log(11111111);
process.stderr.write('stderr.write');


process.stdin.setEncoding('utf8');
/*
process.stdin.on("data", function(data){
    console.log(data);
});
*/
process.stdin.on('readable', function(){
    var chunk = process.stdin.read();
    if(chunk != null){
        process.stdout.write('data: '+chunk);
    }
});

process.stdin.on('end', function(){
   process.stdout.write('end');
});


//正常！！!退出, ctrl+c 的中断不算正常退出
process.on("exit", function(){
    console.log('will exit....');
});

/*signature interrupted 信号中断
* 会改变 ctrl+c 默认的终止行为
  如果要关闭，必须调用 process.exit();
*/
process.on('SIGINT', function(){
    console.log('signature interrupted');
    process.exit();
});
