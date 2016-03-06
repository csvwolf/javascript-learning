/**
 * Created by SkyAo on 16/3/6.
 *
 * Title: 检查重复字符串
 *
 * Function: 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 *
 * Numbers Of Method: 1
 */

var containsRepeatingLetter = function(str) {
    return /([a-zA-z])\1/i.test(str); // \1是对第一个捕获组的引用
};

console.log(containsRepeatingLetter('ratler'));