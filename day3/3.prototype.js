/**
 * this 是谁 和函数在哪里定义和执行 没有任何关系，
 * 1. 自执行函数中的this，永远指向全局对象（window/global）
 * 2. 给元素的事件绑定方法，当触发事件执行方法的时候，方法中的this指向的当前元素
 * 3. 函数执行，看函数前面有没有".", 如果有的话，"."前面是谁，this就是谁，没有的话，this就是window或global
 * 4. 在构造函数模式类中出现的 this.xxx = xxx;中的this是当前类的一个实例
 * 5.我们使用call 和 apply 可以任意的修改this的指向
 */

function Fn(){
    this.x = 100;
}
Fn.prototype.x = 200;
Fn.prototype.getX = function(){
    console.log(this.x);
};
