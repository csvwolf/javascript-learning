/**
 * Created by SkyAo on 16/2/7.
 *
 * Title: 返回函数
 *
 * Function: 实现函数 functionFunction，调用之后满足如下条件：
 *           1、返回值为一个函数 f
 *           2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
 *           3、所有函数的参数数量为 1，且均为 String 类型
 *
 * Numbers Of Method: 1
 */

/**
 * 只能使用两层 但可以通过测试
 * @param str
 * @returns {Function}
 */
var functionFunction = function(str) {
    return function(s) {
        return str + ', ' + s;
    };
};

console.log(functionFunction('Hello')('world'));