/**
 * Created by SkyAo on 16/1/27.
 *
 * Title: 查找数组元素位置
 *
 * Function: 找出元素 item 在给定数组 arr 中的位置
 *
 * Numbers Of Method: 2
 */

/**
 * 最简单的方法
 *
 * @param arr
 * @param item
 * @returns {Number|number}
 */
var indexOf = function(arr, item) {
    return arr.indexOf(item);
};

/**
 * 自建方法
 *
 * @param arr
 * @param item
 * @returns {number}
 */
var indexOf2 = function(arr, item) {
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        if (item == arr[i])
            return i;
    }

    return -1;
};

console.log(indexOf2([ 1, 2, 3, 4 ], 3));