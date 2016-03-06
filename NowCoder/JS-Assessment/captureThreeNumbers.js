/**
 * Created by SkyAo on 16/3/6.
 *
 * Title: 获取指定字符串
 *
 * Function: 给定字符串 str，检查其是否包含 3 个连续的数字
 *              1、如果包含，返回最新出现的 3 个数字的字符串
 *              2、如果不包含，返回 false
 *
 * Numbers Of Method: 1
 */

var captureThreeNumbers = function(str) {
    var reg = str.match(/\d{3}/);

    return reg ? reg[0] : false;
};

console.log(captureThreeNumbers('9876543'));