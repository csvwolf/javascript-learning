/**
 * Created by SkyAo on 16/1/25.
 *
 * Title: 颜色字符串转换
 *
 * Function: 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
 *              1. rgb 中每个 , 后面的空格数量不固定
 *              2. 十六进制表达式使用六位小写字母
 *              3. 如果输入不符合 rgb 格式，返回原始输入
 *
 * Numbers Of Method: 1
 */

/**
 * @param {String} sRGB
 * @returns {String}
 */
var rgb2hex = function(sRGB) {
    var resultArr = /^rgb\((\d{1,3}), *(\d{1,3}), *(\d{1,3})\)$/i.exec(sRGB),
        color = [],
        colorHex = '#',
        hex = '';

    if (resultArr) {
        color[0] = resultArr[1];
        color[1] = resultArr[2];
        color[2] = resultArr[3];

        for (var i = 0; i < 3; i++) {
            // dec-to-hex
            hex = Number(color[i]).toString(16);
            // 如果一位数,需要前导0
            if (hex.length == 1) {
                hex = '0' + hex;
            }

            colorHex += hex;
        }

        return colorHex;
    } else {
        return sRGB;
    }
};

console.log(rgb2hex('rgb(255, 2,   255)'));