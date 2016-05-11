/**
 * Created by SkyAo on 16/3/12.
 *
 * 多维数组转一维数组的方法
 */

var arr = [1,[2,[3]], [4, ['five', 6]]];

/**
 * 这种方法的缺陷在于全部都会变成String
 * @param arr
 * @returns {Array}
 */
var simpleWayToConvert = function(arr) {
    return arr.join().split(',');
};

var convert = function(arr) {
    var newArr = [];

    arr.forEach(function(val) {
        if (val instanceof Array) {
            Array.prototype.push.apply(newArr, convert(val));
        } else {
            newArr.push(val);
        }
    });

    return newArr;
};

console.log(convert(arr));