/**
 * Created by lenovo on 2015/11/20.
 */
var n = 1;
var s = 'hello';
var f = 'global f';

function fn(){
    console.log(n);//undefined
    console.log(s);//hello
    n = 2;
    var n = 3;
    var f = 'fn -f';

    function inner(){
        console.log(n);//3
        console.log(s);//hello
        console.log(f);//undefined
        var f = 'f';
    }
    inner();
}
fn();