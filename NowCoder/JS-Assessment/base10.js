/**
 * Created by SkyAo on 16/3/5.
 *
 * Title: 二进制转换
 *
 * Function: 给定二进制字符串，将其换算成对应的十进制数字
 *
 * Numbers Of Method: 1
 */

/**
 * 最简单的方法
 * @param str
 * @returns {Number}
 */
var base10 = function(str) {
    return parseInt(str, 2);
};

console.log(base10('11000000'));