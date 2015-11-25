/**
 * Created by lenovo on 2015/11/20.
 */

function Person(name){
    this.name = name;
    this.say = function(){
        console.log(this.name);
    };
}

Person.prototype.pubFn = function(){

}
var p = new Person('Tom');
console.log('name' in p);

//检测是否是私有属性
console.log(p.hasOwnProperty('name'));
console.log(p.hasOwnProperty('pubFn'));

//思考题： 自己实现hasPubProperty ，检测共有属性，不管私有是否存在，只要共有存在就返回true
function hasPubPro(obj, pro){
    return (pro in obj ) && !obj.hasOwnProperty(pro);
}

function CreatePerson(name, age){
    this.name = name;
    this.age = age;
    this.sayOld = function(){
       console.log("my name is "+ this.name, "  my age is ", this.age) ;
    }
}

CreatePerson.prototype.say=function(){

};
var p1 = new CreatePerson("莫");
var p2 = new CreatePerson('张');
console.log(p1.sayOld === p2.sayOld);
console.log(p1.say = p2.say);

/**
 * prototpe 的基本概念：
 *1. 在js中 所有的函数（和类）都天生自带一个prototype属性， 并且这个属性指向一个对象数据类型
 *  浏览器默认给 这个prototype属性开辟一个新的堆内存 (xxx-ffff-pro)
 *
 * 2.xxx-fff-pro 是浏览器默认开辟的堆内存，在这个堆内存中 天生自带一个 属性 叫constructor，
 * (只有浏览器默认给 prototype开辟的那个堆内存， 才有这个属性)
 * 这个属性的值 是当前类本身（CreatePerson）
 *
 * 我们在当前类的原型prototype上定义的属性和方法 都是当前类本身的公有属性
 *
 * 3.所有的对象数据类型（普通的一个对象，实例，prototype属性），都天生自带一个 __proto__ 属性
 * 这个属性的值 指向 当前实例（对象）所属类的prototype属性
 *
 * （Object 类是所有对象数据类型的基类， 它的prototype属性 是一个对象， 但是他的__proto__ 属性 不存在）
 *
 * 4.对象身上的属性查找顺序： 私有， 共有， 原型对象的_proto__ , 继续找 __proto__.__proto__ 直到 Object.prototype
 *
 * 5.所有的函数（类）都是Functoin类的一个实例，因此 所有的函数（类）都有一个__proto__ 属性 指向Function 的prototype属性
 * 同时因为所有的函数都会形成新的作用域，所以每个函数都有一个自带的属性prototype ，
 * 这样 一个函数（类）身上其实自带了两个属性，prototype 和 __proto__ ，这叫函数的双面性
 *
 */

console.log(CreatePerson.prototype.constructor === CreatePerson);//true
console.log(p2.__proto__ == CreatePerson.prototype);//true

console.log(CreatePerson.__proto__ == Function.prototype);
console.log(CreatePerson.prototype.__proto__ == Object.prototype);
console.log(CreatePerson.prototype.__proto__.constructor == Object);

