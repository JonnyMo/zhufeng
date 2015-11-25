/*
* 预解释
*  变量 var a =''; 声明 不赋值
*  函数表达式 var fn = function(){}; 声明不赋值
*  函数定义： funciton(){} 声明并赋值
*   this 声明并赋值
* */
console.log(num);
var num = 9;
hello();
world();
function hello(){
    console.log(123);
}

var world = function(){
    console.log(2222);
};