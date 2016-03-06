/**
 * Created by SkyAo on 16/3/4.
 *
 * Title: 二次封装函数
 *
 * Function: 实现函数 partialUsingArguments，调用之后满足如下条件：
 *           1、返回一个函数 result
 *           2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
 *           3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
 *
 * Numbers Of Method: 1
 */

var partialUsingArguments = function(fn) {
    var former = Array.prototype.slice.call(arguments, 1);

    return function() {
        var later = Array.prototype.slice.call(arguments, 0);

        var args = former.concat(later);

        return fn.apply(this, args);
    }
};

var a = 1;
var b = 2;
var c = 3;
var d = 4;

var test = function (first, second, third, forth) {
    return first + second + third + forth;
};

console.log(partialUsingArguments(test, a, b)(c, d));
