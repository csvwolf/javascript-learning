/**
 * Created by SkyAo on 16/1/21.
 *
 * Title: 获取url参数
 *
 * Function: 获取 url 中的参数
 *              1. 指定参数名称，返回该参数的值 或者 空字符串
 *              2. 不指定参数名称，返回全部的参数对象 或者 {}
 *              3. 如果存在多个同名参数，则返回数组
 *
 * Numbers of Method: 1
 */

var getUrlParam = function(sUrl, sKey) {
    // 捕获组两枚,一枚负责Key 一枚负责获取Value
    var reg = new RegExp('([0-9a-zA-Z%]+)=([0-9a-zA-Z%]+)&*', 'ig');
    // 结果集保存
    var result = {};
    var temp;
    var key, value;

    while(temp = reg.exec(sUrl)) {
        key = temp[1];
        value = temp[2];

        if (result[key] && !(result[key] instanceof Array)) {
            result[key] = [result[key], value];     // 如果发现了第二个同名参数,则从字符串变为数组
        } else if (result[key] instanceof Array) {
            result[key].push(value);    // 已经是数组,又找到了,就push进去
        } else {
            result[key] = value;    // 第一次,还是普通保存
        }
    }

    if (sKey) {
        return result[sKey] ? result[sKey] : '';    // 为了避免undefined的情况
    } else {
        return result;  // 返回全部的对象参数
    }


};

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'te'));