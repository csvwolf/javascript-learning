/**
 * Created by SkyAo on 16/3/6.
 *
 * Title: 判断是否符合指定格式
 *
 * Function: 给定字符串 str，检查其是否符合如下格式
 *              1、XXX-XXX-XXXX
 *              2、其中 X 为 Number 类型
 *
 * Numbers Of Method: 1
 */

var matchesPattern = function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
};

console.log(matchesPattern('800-555-1212'));