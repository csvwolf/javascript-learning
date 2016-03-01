/**
 * Created by SkyAo on 16/2/7.
 *
 * Title: 使用闭包
 *
 * Function: 实现函数 makeClosures，调用之后满足如下条件：
 *           1、返回一个函数数组 result，长度与 arr 相同
 *           2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
 *
 * Numbers Of Method:
 */

var makeClosures = function(arr, fn) {
    return arr.map(function(currVal) {
        return function() {
            return fn(currVal);
        }
    });
};

var arr = [1, 2, 3];
var square = function (x) { return x * x; };
var funcs = makeClosures(arr, square);
console.log(funcs[2]());