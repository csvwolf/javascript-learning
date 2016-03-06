/**
 * Created by SkyAo on 16/3/6.
 *
 * Title: 判断是否符合 USD 格式
 *
 * Function: 给定字符串 str，检查其是否符合美元书写格式
 *              1、以 $ 开始
 *              2、整数部分，从个位起，满 3 个数字用 , 分隔
 *              3、如果为小数，则小数部分长度为 2
 *              4、正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3
 *
 * Numbers Of Method: 1
 */

var isUSD = function(str) {
    return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
};

console.log(isUSD('$20,933,209.93'));

