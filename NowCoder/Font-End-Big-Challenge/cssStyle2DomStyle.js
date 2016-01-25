/**
 * Created by SkyAo on 16/1/25.
 *
 * Title: 将字符串转换为驼峰格式
 *
 * Function: css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
 *              1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
 *              2. -webkit-border-image 转换后的结果为 webkitBorderImage
 *
 * Numbers Of Method: 2
 */

/**
 * 不使用正则表达式的方法
 * @param {string} sName
 * @returns {string}
 */
var cssStyle2DomStyle = function(sName) {
    var strArr = sName.split('-'),
        length = strArr.length,
        start = false,
        result = '';

    for (var i = 0; i < length; i++) {
        // 判断是否为空格,空则跳过
        if (strArr[i].trim() != '') {
            // 判断是否是第一个单词
            if (!start) {
                start = true;
                result += strArr[i];
            } else {
                // 首字母大写
                result = result + strArr[i][0].toUpperCase() + strArr[i].substring(1);
            }
        }
    }
    return result;
};

/**
 * 使用正则表达式匹配
 * @param {string} sName
 * @returns {XML|string}
 */
var cssStyle2DomStyle2 = function(sName) {
    // (?!^): 如果不是开头的话
    return sName.replace(/(?!^)\-(\w)(\w+)/g, function($1, $2, $3) {
        // $1为完整匹配项
        return $2.toUpperCase() + $3.toLowerCase();
    }).replace('-', '');
};

console.log(cssStyle2DomStyle2('-background-img'));