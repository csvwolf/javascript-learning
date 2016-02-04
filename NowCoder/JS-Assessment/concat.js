/**
 * Created by SkyAo on 16/2/4.
 *
 * Title: 数组合并
 *
 * Function: 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
 *
 * Numbers Of Method: 2
 */
/**
 * concat本身用于合并
 * @param arr1
 * @param arr2
 * @returns {Array.<T>|string}
 */
var concat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

/**
 * 使用传统迭代
 * for-in不太靠谱
 * @param arr1
 * @param arr2
 * @returns {Array}
 */
var concat2 = function(arr1, arr2) {
    var newArr = [],
        length1 = arr1.length,
        length2 = arr2.length,
        i;

    for (i = 0; i < length1; i++) {
        newArr.push(arr1[i]);
    }

    for (i = 0; i < length2; i++) {
        newArr.push(arr2[i]);
    }

    return newArr;
};


console.log(concat2([1, 2, 3, 4], ['a', 'b', 'c', 1]));