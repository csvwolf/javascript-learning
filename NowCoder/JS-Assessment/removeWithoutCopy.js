/**
 * Created by SkyAo on 16/1/27.
 *
 * Title: 移除数组中的元素
 *
 * Function: 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
 *
 * Numbers Of Method: 1
 */

var removeWithoutCopy = function(arr, item) {
    var length = arr.length,
        idx = -1;

    while ((idx = arr.indexOf(item)) !== -1 ) {
        arr.splice(idx, 1);
    }

    return arr;
};

console.log(removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2));