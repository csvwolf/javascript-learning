/**
 * Created by SkyAo on 16/1/27.
 *
 * Title: 添加元素
 *
 * Function: 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
 *
 * Numbers Of Method:
 */

/**
 * 普通的迭代拷贝
 * @param arr
 * @param item
 * @returns {Array}
 */
var append = function(arr, item) {
    var length = arr.length,
        newArr = [];

    for (var i = 0; i < length; i++) {
        newArr.push(arr[i]);
    }

    newArr.push(item);

    return newArr;
};

/**
 * 使用slice浅拷贝+push组合
 * @param arr
 * @param item
 * @returns {Blob|ArrayBuffer|Array.<T>|string}
 */
var append2 = function(arr, item) {
    var newArr = arr.slice(0);  // slice(start, end)浅拷贝数组
    newArr.push(item);
    return newArr;
};

/**
 * 使用concat将传入的数组或非数组值与原数组合并,组成一个新的数组并返回
 * @param arr
 * @param item
 * @returns {Array.<T>|string}
 */
var append3 = function(arr, item) {
    return arr.concat(item);
};

console.log(append3([1, 2, 3, 4],  10));