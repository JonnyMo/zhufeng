var x = 5;
var addX = function(num){
    return  num + x;
};

/*
module.exports.x = x;
module.exports.addX = addX;
*/

module.exports = {
    x : x,
    addX : addX
};