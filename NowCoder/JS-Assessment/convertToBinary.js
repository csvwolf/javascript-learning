/**
 * Created by SkyAo on 16/3/5.
 *
 * Title: 二进制转换
 *
 * Function: 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
 *
 * Numbers Of Method: 3
 */

/**
 * 最普通的方法
 * 这种方法的缺点是性能低,因为不断的补充0
 * @param num
 * @returns {string}
 */
var convertToBinary = function(num) {
    var binary = num.toString(2),
        length = binary.length,
        i;

    if (length < 8) {
        for (i = 0; i < 8 - length; i++) {
            binary = '0' + binary;
        }
    }

    return binary;
};

/**
 * 这种方法减少了字符串拼接次数
 * @param num
 * @returns {string}
 */
var convertToBinary2 = function(num) {
    var binary = num.toString(2),
        length = binary.length,
        zeros = length < 8 ? '00000000'.substring(0, 8 - length) : '';

    return zeros + binary;
};

console.log(convertToBinary2(65));