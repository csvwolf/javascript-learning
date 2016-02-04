/**
 * Created by SkyAo on 16/2/4.
 *
 * Title: 删除数组第一个元素
 *
 * Function: 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
 *
 * Numbers Of Method: 3
 */


/**
 * 使用普通的迭代方法
 * @param arr
 * @returns {Array}
 */
var curtail = function(arr) {
    var newArr = [],
        length = arr.length;

    for (var i = 1; i < length; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
};

/**
 * 使用slice浅拷贝
 * @param arr
 * @returns {Blob|ArrayBuffer|Array.<T>|string}
 */
var curtail2 = function(arr) {
    return arr.slice(1);
};

/**
 * 使用filter过滤结果
 * @param arr
 * @returns {Array.<T>|*}
 */
var curtail3 = function(arr) {
    return arr.filter(function (element, idx) {
        return idx !== 0;
    });
};

console.log(curtail3([1,2,3]));