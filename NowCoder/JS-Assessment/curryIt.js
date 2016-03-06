/**
 * Created by SkyAo on 16/3/4.
 *
 * Title: 柯里化
 *
 * Function: 已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
 *           1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
 *           2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
 *           3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
 *           4、调用 c 之后，返回的结果与调用 fn 的返回值一致
 *           5、fn 的参数依次为函数 a, b, c 的调用参数
 *
 * Numbers Of Method: 1
 */

var curryIt = function (fn) {
    var arr = [], length = fn.length;   // length 为 fn 期望的参数数量

    return function(x) {
        arr.push(x);

        // 数量没到,开始递归,数量达到了结束执行
        return arr.length < length ? arguments.callee : fn.apply(null, arr);
    }
};


var fn = function (a, b, c) {
    return a + b + c;
};
console.log(curryIt(fn)(1)(2)(3));