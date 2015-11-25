/**
 *自执行函数内永远指向全局
 * 谁调用这个函数this就是谁
 * 如果没有调用，this就是全局global
 *
 * 函数作为一个返回值被返回时，
 * 闭包形成的作用域不会被销毁
 */
var number = 2;
var obj = {
    number: 4,
    fn1:(function(){
        this.number *=2;
        number =number *2;
        var number = 3;
        return function(){
            this.number *=2;
            number *=3;
            console.log(number);
        };
    })()
};

var fn1 = obj.fn1;
console.log(number);//2
fn1();//9
obj.fn1();//27 fn1作用域没有销毁哦
fn1 = null;
