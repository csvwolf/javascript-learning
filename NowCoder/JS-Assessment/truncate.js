/**
 * Created by SkyAo on 16/1/30.
 *
 * Title: 删除数组最后一个元素
 *
 * Function: 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
 *
 * Numbers Of Method:
 */

/**
 * 使用slice浅拷贝一份数组返回
 * @param arr
 * @returns {Blob|ArrayBuffer|Array.<T>|string}
 */
var truncate = function(arr) {
    return arr.slice(0, -1);
};

/**
 * 最普通的方法
 * @param arr
 * @returns {Array}
 */
var truncate2 = function(arr) {
    var newArr = [],
        length = arr.length;

    for (var i = 0; i < length - 1; i++) {
        newArr[i] = arr[i];
    }

    return newArr;
};

/**
 * 使用concat将原数组与空组合形成新数组
 * @param arr
 * @returns {Array}
 */
var truncate3 = function(arr) {
    var newArr = arr.concat();
    newArr.pop();

    return newArr;
};

// 这种方法改变了类型,显然不好用
var truncateWrong = function(arr) {
    var newArr = arr.join().split(',');
    newArr.pop();
    return newArr;
};

console.log(truncate2([1, 2, 3, 4]));