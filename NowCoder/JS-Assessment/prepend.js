/**
 * Created by SkyAo on 16/2/3.
 *
 * Title: 添加元素
 *
 * Function: 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
 *
 * Numbers Of Method: 4
 */

/**
 * 使用一般的迭代方法拷贝
 * @param arr
 * @param item
 * @returns {Array}
 */
var prepend = function(arr, item) {
    var newArr = [],
        length = arr.length;

    newArr.push(item);

    for (var i = 0; i < length; i++) {
        //newArr[i+1] = arr[i];
        newArr.push(arr[i]);
    }

    return newArr;
};

/**
 * 浅拷贝数组之后使用unshift插入到首位
 * @param arr
 * @param item
 * @returns {Blob|ArrayBuffer|Array.<T>|string}
 */
var prepend2 = function(arr, item) {
    var newArr = arr.slice(0);
    newArr.unshift(item);

    return newArr;
};

/**
 * 使用concat方法合并数组
 * @param arr
 * @param item
 * @returns {Array.<*>}
 */
var prepend3 = function(arr, item) {
    return [item].concat(arr);
};

/**
 * 使用两次reverse+push方法,根据内部实现不同不同语言可能会和2有性能差
 * 在有些情况下这种方法会更快
 * @param arr
 * @param item
 * @returns {Blob|ArrayBuffer|Array.<T>|string}
 */
var prepend4 = function(arr, item) {
    var newArr = arr.slice(0);
    newArr.reverse();
    newArr.push(item);
    newArr.reverse();

    return newArr;
};

console.log(prepend4([1, 2], 10));