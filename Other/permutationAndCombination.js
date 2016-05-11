/**
 * Created by SkyAo on 16/5/11.
 *
 * 全排列和全组合
 *
 * 算法思路比较巧妙，作者确实厉害。
 *
 * 这里使用了JS去实现这个算法。
 *
 * 来源：http://wuchong.me/blog/2014/07/28/permutation-and-combination-realize/
 */
/**
 * 交换一个数组中的第i项和第j项（起始项为0）
 * @param arr
 * @param i
 * @param j
 */
var swap = function(arr, i, j) {
    var length = arr.length,
        temp;

    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

/**
 * 检测是否可以交换
 * 查看交换的值在之后是否有重复出现，需求是只和特定的value仅交换一次，如果有重复则不交换
 * 此时有两种思路，一种是首次交换，之后抛弃所有同value的值（此时我们可以提供向前检测的方法）
 * 第二种是最后交换，在此之前所有值都不进行交换（这时我们使用向后检测的方法）
 * 这里我们使用向后检测，保证这是最后一个
 * @param arr
 * @param i
 * @param j
 */
var canSwap = function(arr, i, j) {
    return arr.slice(i, j).indexOf(arr[j]) === -1;
};

/**
 * 全排列使用的是递归交换数组中的数字
 * @param listArr
 * @param start
 * @param callback
 */
var permutate = function(listArr, start, callback) {
    var i,
        length = listArr.length;

    if (start === listArr.length - 1) {
        callback(listArr);
    } else {
        for (i = start; i < length; i++) {
            swap(listArr, start, i);
            permutate(listArr, start + 1, callback);
            swap(listArr, start, i);
        }
    }
};

var permutateWithoutTheSame = function(listArr, start, callback) {
    var i,
        length = listArr.length;

    if (start === listArr.length - 1) {
        callback(listArr);
    } else {
        for (i = start; i < length; i++) {
            if (canSwap(listArr, start, i)) {
                swap(listArr, start, i);
                arguments.callee(listArr, start + 1, callback);
                swap(listArr, start, i);
            }
        }
    }
};

/**
 * 组合
 * 组合的思路是通过二进制编码表示value的有无达到列出全部组合的效果。
 * @param listArr
 * @param callback
 */
var combinate = function(listArr, callback) {
    var result,
        temp,
        left,
        max = Math.pow(2, listArr.length),
        i;

    for (i = 1; i < max; i++) {
        //console.log(binary);
        temp = i;
        result = listArr.filter(function() {
            var result = false;
            left = temp % 2;
            if (left !== 0 && temp !== 0) {
                result = true;
            }
            temp = parseInt(temp / 2);

            return result;
        });

        callback(result);
    }


};

permutateWithoutTheSame(['a', 'b', 'b'], 0, function(arr) {
    console.log(arr.join(''));
});

combinate(['a', 'b', 'c'], function(result) {
    console.log(result);
});