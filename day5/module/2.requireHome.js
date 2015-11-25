var home = require('./home.js');
var fs = require('fs');
console.log("==================");
console.log(require.cache);//已经加载的模块会被缓存起来 ｛标识： 模块对象｝
delete require.cache['e:\\node_space\\day5\\module\\home.js'];
console.log("###############");
console.log(require.cache);
