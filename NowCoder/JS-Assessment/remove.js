/**
 * Created by SkyAo on 16/1/27.
 *
 * Title: 移除数组中的元素
 *
 * Function: 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
 *
 * Numbers Of Method: 2
 */

/**
 * 普通的方法构造一个过滤后的数组
 * @param arr
 * @param item
 * @returns {Array}
 */
var remove = function(arr, item) {
    var length = arr.length,
        newArr = [];
    for (var i = 0; i < length; i++) {
        if (arr[i] !== item) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
};
/**
 * 使用自带的filter进行过滤操作
 * 给出了所有的形参,用不上的保留
 * @param arr
 * @param item
 * @returns {Array.<T>|*}
 */
var remove2 = function(arr, item) {
    return arr.filter(function(element, index, arr) {
        return element !== item;
    });
};
console.log(remove2([1, 2, 3, 2], 2));
