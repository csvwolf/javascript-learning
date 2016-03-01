/**
 * Created by SkyAo on 16/2/6.
 *
 * Title: 函数传参
 *
 * Function: 将数组 arr 中的元素作为调用函数 fn 的参数
 *
 * Numbers Of Method: 1
 */

var argsAsArray = function(fn, arr) {
    return fn.apply(this, arr); // apply+参数数组
};

console.log(argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']));