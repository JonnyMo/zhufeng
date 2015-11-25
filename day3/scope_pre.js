/**
 * Created by lenovo on 2015/11/20.
 */
var num = 9;

var name = 'zfpx';
var x = 'hello';
function say(){
    console.log(x);
    console.log(num);
    console.log(name);
    num = 7;
    var num = 6;
}

say();
//================
/*
* 这里非常重要！！！！
* 函数执行时的作用域不是看 在什么地方执行， 而是看函数在哪里定义的
*
* 下面的代码在执行时： bar里的代码
*  fn() 执行时，虽然 当前作用域是 bar函数内的作用域
*  但是 fn 的定义是 跟bar 同级的作用域，
*  这个作用域中 去寻找a， 自身没有，肯定从父级作用域去查找，值正好是10
*
* 老师的总结：
* 函数的作用域在函数定义时就已经确定了，跟函数在什么地方执行没有关系
*
* */

var a = 10;
function fn(){
    console.log(a);
}

function bar(fn){
    var a = 20;
    fn();
}
bar(fn);

