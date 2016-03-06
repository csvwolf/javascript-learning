/**
 * Created by SkyAo on 16/3/6.
 *
 * Title: 判断是否以元音字母结尾
 *
 * Function: 给定字符串 str，检查其是否以元音字母结尾
 *              1、元音字母包括 a，e，i，o，u，以及对应的大写
 *              2、包含返回 true，否则返回 false
 *
 * Numbers Of Method:
 */

var endsWithVowel = function(str) {
    return /[aeiouAEIOU]$/i.test(str);
};

console.log(endsWithVowel('gorilla'));