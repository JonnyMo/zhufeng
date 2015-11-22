/**
 * 事件
 * 发布订阅模式
 * 观察者模式
 * 当主题对象发生变化时， 会通知所有的观察者对象，更新自己
 */
//var EventEmitter = require('events').EventEmitter;
var EventEmitter = require('events');
var util = require('util');
function Girl(){}
function Boy(name, response){
    this.name = name;
    this.response = response;
}
util.inherits(Girl, EventEmitter);
var perfect = new Girl();

var b1 = new Boy('备胎1', function(){
    console.log('鸡腿');
});
var b2 = new Boy('备胎1', function(){
    console.log('红烧肉');
});
//perfect.setMaxListeners(1);
perfect.on('eleme',  b1.response);
perfect.on('eleme', b2.response);

var count = perfect.listenerCount("eleme");
console.log("count: ", count);

perfect.emit('eleme');
perfect.emit('keleme');

perfect.once('die', function(){
    console.log('die');
});
perfect.emit('keleme');
perfect.emit('die');
perfect.emit('die');


