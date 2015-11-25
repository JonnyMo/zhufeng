/*

function home(require, __dirname, __filename, module){
    var exports = module.exports;
*/
    console.log("这里的代码只会执行一次，因为模块第一次被加载后会被缓存到 module.cache");
    var x = 5;
    var addX = function(num){
        return  num + x;
    };

    module.exports = {
        x : x,
        addX : addX
    };

/*
    return module.exports;
}

var home = home();
console.log(home.x);
console.log(home.addX(6));
*/

