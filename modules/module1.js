/**
 * Created by lenovo on 2015/11/17.
 */
var x = 5;
var add = function(val){
    return x + val;
};

module.exports.add = add;
module.exports.x = x;
console.log(module);
console.log(require.main === module);
