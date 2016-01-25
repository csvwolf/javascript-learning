/**
 * Created by SkyAo on 16/1/25.
 *
 * Title: 字符串字符统计
 *
 * Function: 统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
 *              1. 不限制 key 的顺序
 *              2. 输入的字符串参数不会为空
 *              3. 忽略空白字符
 *
 * Numbers Of Method: 2
 */

/**
 * 普通的方法
 * @param {string} str
 * @returns {object}
 */
var count = function(str) {
    var length = str.length,
        obj = {},
        tempChar = '';

    for (var i = 0; i < length; i++) {
        tempChar = str[i];
        if (tempChar != ' ') {
            if (tempChar in obj) {
                obj[tempChar]++;
            } else {
                obj[tempChar] = 1;
            }
        }
    }

    return obj;
};

/**
 * 使用正则表达式的方法
 * @param str
 * @returns {object}
 */
var count2 = function(str) {
    var obj = {};
    str.replace(/(\S)/g, function($1) {
        $1 in obj ? obj[$1]++ : obj[$1] = 1;
    });

    return obj;
};

console.log(count2('hello world'));