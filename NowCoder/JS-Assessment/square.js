/**
 * Created by SkyAo on 16/2/5.
 *
 * Title: 求二次方
 *
 * Function: 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 *
 * Numbers Of Method: 2
 */

/**
 * 使用map直接处理
 * @param arr
 * @returns {Array}
 */
var square = function(arr) {
    return arr.map(function(element) {
        // 对于平方,也可以简单的实用element * element
        return Math.pow(element, 2);
    });
};

/**
 * 普通的处理方法
 * @param arr
 * @returns {Array}
 */
var square2 = function(arr) {
    var newArr = [],
        length = arr.length,
        curr;

    for (var i = 0; i < length; i++) {
        curr = arr[i];

        newArr.push(curr * curr);
    }

    return newArr;
};

console.log(square2([1, 2, 3, 4]));