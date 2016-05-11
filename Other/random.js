/**
 * Created by SkyAo on 16/5/11.
 *
 * 正确和错误的随机洗牌姿势
 */
/**
 * 这是一个错误的方法，因为这个方法其实非常的不随机，但其原理非常简单
 * 使用快速排序+随机数来进行随机排序。
 * @param arr
 * @return result
 */
var shuffleHack = function(arr) {
    var result = arr.slice();
    result.sort(function() {
        return Math.random() - 0.5;
    });

    return result;
};


/**
 * 正确的做法
 * Fisher Yates 算法
 *
 * 原理是倒序选择排序，只是随机选择无序的位置进行交换排列
 * @param arr
 * @returns {Array.<T>|string|Blob|ArrayBuffer}
 */
var shuffle = function(arr) {
    var result = arr.slice(),
        length = result.length,
        i,
        temp,
        j;

    for (i = length - 1; i > 1; i--) {
        j = parseInt(Math.random() * i);
        temp = result[i];
        result[i] = result[j];
        result[j] = temp;
    }

    return result;
};

var arr = ['33', '555', '88', '66', '32', '11', '09042', '421', '424'];

for (var i = 0; i < 50; i++) {
    console.log(shuffle(arr).join(' '));
}