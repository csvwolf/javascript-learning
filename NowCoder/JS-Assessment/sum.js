/**
 * Created by SkyAo on 16/1/27.
 *
 * Title: 数组求和
 *
 * Function: 计算给定数组 arr 中所有元素的总和
 *
 * Numbers Of Method: 3
 */

/**
 * 最普通的遍历求值
 * @param arr
 * @returns {number}
 */
var sum = function(arr) {
    var length = arr.length,
        sum = 0;
    for (var i = 0; i < length; i++) {
        sum += arr[i];
    }

    return sum;
};

/**
 * 使用累加方法reduce
 * 这里列出了所有的函数形参
 * @param arr
 * @returns {*}
 */
var sum2 = function(arr) {
    return arr.reduce(function(prev, curr, index, arr) {
        return prev + curr;
    });
};

/**
 * 使用forEach遍历
 * @param arr
 * @returns {number}
 */
var sum3 = function(arr) {
    var sum = 0;

    arr.forEach(function(value, index, arr) {
        sum += value;
    }, 0);

    return sum;
};

console.log(sum3([1, 2, 3]));