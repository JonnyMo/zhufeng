/*
* 闭包是函数运行时产生的那个私有作用域
* 1.在执行全局代码的时候，会产生全局上下文
* 每次调用函数，又会产生上下文
*
* 2.作用域：
*   地盘概念 北京 海淀 有所属关系，没有变量
*   通过作用域中的上下文来获取变量
*
*   函数执行是会产生上下文， 变量存在上下文中
* */

var a = 10;
var fn;
var bar = function(x){
   var b = 5;
    fn(x + b)
};

fn = function(y){
    var c = 5;
    console.log(y + c);
}

bar(10);

/**
 * 产生闭包的两种方式
 * 11.函数作为方法的返回值
 * 2.函数作为参数被传递
 */
console.log(222222222);
var i = 9;
function fo(){
    i = 0;
    return function(n){
        return n + i++;
    };
}

var f = fo();
var a = f(15); console.log(a);
var b = fo()(15);console.log(b);
var c = fo()(20);console.log(c);
var d = f(20);console.log(d);
