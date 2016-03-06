/**
 * Created by SkyAo on 16/3/5.
 *
 * Title: 二进制转换
 *
 * Function: 获取数字 num 二进制形式第 bit 位的值。注意：
 *           1、bit 从 1 开始
 *           2、返回 0 或 1
 *           3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1
 *
 * Numbers Of Method: 6
 */

/**
 * 使用自带的转换
 * @param num
 * @param bit
 * @returns {*}
 */
var valueAtBit = function(num, bit) {
    var binary = num.toString(2),   // 传入数字代表几进制(可以随便传)
        length = binary.length;

    return binary[length - bit];
};

/**
 * 使用位运算(很牛逼的方式)
 * @param num
 * @param bit
 * @returns {number}
 */
var valueAtBit2 = function(num, bit) {
    return (num >> bit - 1) & 1;
};

/**
 * 使用string取子字符串
 * @param num
 * @param bit
 * @returns {string}
 */
var valueAtBit3 = function(num, bit) {
    return num.toString(2).substring(-bit+1, 1);
    // substr和substring不一样
    //return num.toString(2).substr(-bit, 1);
    //return num.toString(2).slice(-bit, -bit+1);
};

/**
 * 使用数组
 * @param num
 * @param bit
 * @returns {T}
 */
var valueAtBit4 = function(num, bit) {
    return num.toString(2).split("").reverse()[bit - 1];
};

/**
 * 自己计算的方法
 * @param num
 * @param bit
 * @returns {number}
 */
var valueAtBit5 = function(num, bit) {
    var i;

    for (i = 1; i < bit; i++) {
        num = parseInt(num / 2);
    }

    return num % 2;
};

console.log(valueAtBit5(128, 8));