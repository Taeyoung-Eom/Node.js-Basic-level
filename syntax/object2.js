// array, object
var f = function (){
console.log(1+1);
console.log(1+2);
};
f();
//JS에서는 function자체가 값이 될 수 있다.

var a = [f];
a[0]();

var o = {
    func:f
}
o.func();