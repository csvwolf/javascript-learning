/**
 * Created by SkyAo on 16/2/4.
 *
 * Title: 添加元素
 *
 * Function: 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
 *
 * Numbers Of Method: 3
 */

/**
 * 先浅拷贝一份再用splice插入
 * @param arr
 * @param item
 * @param index
 * @returns {Blob|ArrayBuffer|Array.<T>|string}
 */
var insert = function(arr, item, index) {
    var newArr = arr.slice(0);

    newArr.splice(index, 0, item);

    return newArr;
};

/**
 * 传统遍历计数
 * @param arr
 * @param item
 * @param index
 * @returns {Array}
 */
var insert2 = function(arr, item, index) {
    var newArr = [],
        length = arr.length,
        i = 0,
        insertOrNot = false;    // 是否已插入


    while (i < length) {
        if (i === index && !insertOrNot) {
            newArr.push(item);
            insertOrNot = true;
        } else {
            newArr.push(arr[i]);
            i++;
        }
    }

    return newArr;

};

/**
 * 使用自带函数拼接数组
 * @param arr
 * @param item
 * @param index
 * @returns {string}
 */
var insert3 = function(arr, item, index) {
    return arr.slice(0, index).concat(item, arr.slice(index));
};

console.log(insert3([1, 2, 3, 4], 'z', 2));