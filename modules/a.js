/**
 * Created by lenovo on 2015/11/17.
 */
exports.x = 'a1';
console.log("a.js ", require("./b.js").x);
exports.x = 'a2';
