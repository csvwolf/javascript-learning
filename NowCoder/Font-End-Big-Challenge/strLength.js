/**
 * Created by SkyAo on 16/1/25.
 *
 * Title: 获取字符串的长度
 *
 * Function: 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1, 否则如果字符 Unicode 编码 > 255 则长度为 2
 *
 * Numbers Of Method: 1
 */

/**
 * @param {string} s
 * @param {boolean} bUnicode255For1
 * @returns {boolean}
 */

var strLength = function(s, bUnicode255For1) {
    var strLength = s.length,
        sumLength = 0;

    if (bUnicode255For1) {
        return strLength;
    } else {
        for (var i = 0; i < strLength; i++) {
            if (s.charCodeAt(i) > 255) {
                sumLength += 2;
            } else {
                sumLength++;
            }
        }

        return sumLength;
    }
};

console.log(strLength('hello world, 牛客', false));