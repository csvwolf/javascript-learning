/**
 * Created by SkyAo on 16/3/6.
 *
 * Title: 判断是否包含数字
 *
 * Function: 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
 *
 * Numbers Of Method: 1
 */

var containsNumber = function(str) {
    return /\d/i.test(str);
};

console.log(containsNumber('abc123'));