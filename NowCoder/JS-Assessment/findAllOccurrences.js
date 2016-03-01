/**
 * Created by SkyAo on 16/2/5.
 *
 * Title: 查找元素位置
 *
 * Function: 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
 *
 * Numbers Of Method: 2
 */

/**
 * 使用indexOf查找
 * @param arr
 * @param target
 * @returns {Array}
 */
var findAllOccurrences = function(arr, target) {
    var result = [],
        location = 0;

    while ((location = arr.indexOf(target, location)) !== -1) {
        result.push(location);
        location++;
    }

    return result;
};

/**
 * 普通的方法
 * @param arr
 * @param target
 * @returns {Array}
 */
var findAllOccurrences2 = function(arr, target) {
    var result = [],
        length = arr.length,
        i;

    for (i = 0; i < length; i++) {
        if (arr[i] === target) {
            result.push(i);
        }
    }

    return result;
};

console.log(findAllOccurrences2('abcdefabc'.split(''), 'a').sort());
