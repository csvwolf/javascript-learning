/**
 * Created by SkyAo on 16/3/1.
 *
 * Title: 使用 arguments
 *
 * Function: 函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。
 *
 * Numbers Of Method:
 */

var useArguments = function() {
/*    return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
        return prev + curr;
    })*/

    return Array.prototype.reduce.call(arguments, function(prev, curr) {
        return prev + curr;
    })
};

console.log(useArguments(1, 2, 3, 4));