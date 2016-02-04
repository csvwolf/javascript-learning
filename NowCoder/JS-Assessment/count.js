/**
 * Created by SkyAo on 16/2/4.
 *
 * Title: 计数
 *
 * Function: 统计数组 arr 中值等于 item 的元素出现的次数
 *
 * Numbers Of Method: 3
 */

/**
 * 统计过滤完的数组长度
 * @param arr
 * @param item
 * @returns {Number}
 */
var count = function(arr, item) {
    return arr.filter(function(element) {
        return element === item;
    }).length;
};

/**
 * 普通的计数方式
 * @param arr
 * @param item
 * @returns {number}
 */
var count2 = function(arr, item) {
    var counter = 0,
        length = arr.length;

    for (var i = 0; i < length; i++) {
        if (arr[i] === item) {
            counter++;
        }
    }

    return counter;
};

/**
 * 使用indexOf查找
 * @param arr
 * @param item
 * @returns {number}
 */
var count3 = function(arr, item) {
    var counter = 0,
        location = 0;

    while ((location = arr.indexOf(item, location)) !== -1) {
        counter++;
        location++; // 需要从找到的位置下一位开始查找
    }

    return counter;
};

console.log(count3([1, 2, 4, 4, 3, 4, 3], 4));