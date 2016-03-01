/**
 * Created by SkyAo on 16/2/5.
 *
 * Title: 查找重复元素
 *
 * Function: 找出数组 arr 中重复出现过的元素
 *
 * Numbers Of Method: 3
 */

/**
 * 使用对象存储并读取
 * @param arr
 * @returns {Array}
 */
var duplicates = function(arr) {
    var map = {},
        length = arr.length,
        curr,
        result = [];

    for (var i = 0; i < length; i++) {
        curr = arr[i];
        if (!map[curr]) {
            map[curr] = 1;
        } else {
            map[curr]++;
        }
    }

    for (var key in map) {
        // 为了保证遍历到的在其对象而不在其原型链上
        if (map.hasOwnProperty(key) && map[key] > 1) {
            // 如果不是纯数字构成的数组,那么这个方法不靠谱
            result.push(parseInt(key));
        }
    }

    return result;
};

/**
 * 使用index数组
 * @param arr
 * @returns {Array}
 */
var duplicates2 = function(arr) {
    var newArr = [],
        length = arr.length,
        index,
        lastIndex;

    for (var i = 0; i < length; i++) {
        // 缓存index
        index = arr.indexOf(arr[i]);
        lastIndex = arr.lastIndexOf(arr[i]);
        // 如果index不相同,并且是第一次出现
        if (index !== lastIndex && index === i) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
};

/**
 * 使用filter过滤数组
 * @param arr
 * @returns {Array.<T>}
 */
var duplicates3 = function(arr) {
    // 这里的排序不是按照数字大小而是字符串比较
    // 由于我们只是需要统一,不需要严格按照大小从大到小,所以可以这么排序
    return arr.sort().filter(function(element, index) {
        // 这里我们只要取相同中的第一个数,对于后续数组(除了重复中的最后一个),需要保证其排除,也就是排除他等于后一项并且他的前一项等于它的情况
        return arr[index + 1] === element && arr[index - 1] !== element;
    });
};
console.log(duplicates3([1, 1, 1, 2, 3, 4, 2, 3, 1]));