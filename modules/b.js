/**
 * Created by lenovo on 2015/11/17.
 */
exports.x = 'b1';
console.log('b.js ', require('./a.js').x);
exports.x ='b2';
