/**
 *批量设置prototype属性
 *
 */
function Fn(num){
    this.x = num;
}

Fn.prototype.getX = function(){
    return this.x;
};

Fn.prototype.setX = function(x){
    this.x = x;
};

Fn.prototype.removeX = function(){

};

// 方案1. 给Fn.prototype 起个别名
var pro = Fn.prototype;
pro.getX = function(){
    return this.x;
};

pro.setX = function(x){
    this.x = x;
};

pro.removeX = function(){

};

/**
 *方案2. 手动创建一个新的内存，给Fn.prototype 重新赋值
 * 这时候 prototype的constructor 会丢失，需要手动重新赋值
 */

Fn.prototype = {
    /*别丢了，这个需要手动重新赋值*/
    constructor: Fn,

    getX : function(){
        return this.x;
    },
    setX : function(x){
        this.x = x;
    },
    removeX : function(){
        delete this.x;
    },
    recover:function(){
        //避免把以前prototype 身上的方法给覆盖掉
        /**
         * for in 用来遍历一个对象中的所有属性和方法的（私有+公有），
         * 但对于浏览器内置的一些属性（比如: constructor, __proto__ Object原型身上的属性 hasOwnProperty toString .....）
         * 我们是无法用forin 循环来遍历出来的，这是浏览器对内置属性和方法的一个保护
         *
         * 但是使用 in 来判断，依然是能判断的 console.log('hasOwenProperty' in {}); 打印是true
         *
         */
        for(var name in pro){
            if(name in this){
                this['my' + name] = this[name];
            }
            this[name] = pro[name];
        }
        pro = null;
    }
};

Fn.prototype.recover();
console.dir(Fn.prototype);

function abc(){
    tmp = arguments[0];
    arguments = tmp;
    console.log("arguments: ", arguments);
    eval("aaa(" + arguments.join(",").replace(/^[|]$/, "") + ")");
}

abc([1,2,3]);
function aaa(){
    console.log('111111111');
    console.log(arguments);
    console.log('2222222');
}