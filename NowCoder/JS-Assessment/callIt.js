/**
 * Created by SkyAo on 16/3/4.
 *
 * Title: 使用 apply 调用函数
 *
 * Function: 实现函数 callIt，调用之后满足如下条件
 *           1、返回的结果为调用 fn 之后的结果
 *           2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
 *
 * Numbers Of Method: 1
 */

/**
 *
 * @param fn
 * @returns {*}
 */
var callIt = function(fn) {
    return fn.apply(this, Array.prototype.slice.call(arguments, 1));
};

var a = 1; var b = 2;
var test = function (first, second) {
    console.log(first);
    console.log(second);
    return first === a && second === b;
};

console.log(callIt(test, a, b));