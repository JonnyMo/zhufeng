function execReg(reg, str){
	var result = reg.exec(str);
	console.log(result);
}

/*var reg = /b/;
var str = 'bbs.bblueidea.com';
execReg(reg, str);
*/

/*var reg = /\w/;
var str = 'online.zhufengpeixun.cn';
execReg(reg, str);
*/

/*
var reg = /(\w)(\w)(\w)/g;
var str = 'bbs.zhufengpeixun.cn';
execReg(reg, str);
*/


function testReg(reg, str){
	console.log(reg.test(str));
}
/*
var reg = /b/;
var str = 'bbs.zhufengpeixun.cn';
testReg(reg, str);

*/

function matchReg(reg, str){
	var result = str.match(reg);
	console.log(result);
}

var reg =/b/g;
var str = 'bbs.blueidea.com';
matchReg(reg, str);
execReg(reg, str);


