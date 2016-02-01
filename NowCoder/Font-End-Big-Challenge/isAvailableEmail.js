/**
 * Created by SkyAo on 16/1/25.
 *
 * Title: 邮箱字符串判断
 *
 * Function: 判断输入是否是正确的邮箱格式
 *
 * Numbers Of Method: 1
 */

/**
 * @param {String} sEmail
 * @returns {boolean}
 */
var isAvailableEmail = function(sEmail) {
    // {1,3}不能有空格,需要匹配多级域名,在[]内没有必要转义
    return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+(\.[a-zA-Z0-9_-]+){1,4}$/.test(sEmail);
};

console.log(isAvailableEmail('skyao.-123@qq.com'));