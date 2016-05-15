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
    //console.log('slice', arr.slice(i, j), arr[j]);
    return arr.slice(i, j).indexOf(arr[j]) === -1;
};

/**
 * 全排列使用的是递归交换数组中的数字
 * @param listArr
 * @param start 开始的值，调用时输入0
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

/**
 * 去重的全排列
 * @param listArr
 * @param start
 * @param callback
 */
var permutateWithoutTheSame = function(listArr, start, callback) {
    var i,
        length = listArr.length;

    if (start === listArr.length - 1) {
        callback(listArr);
    } else {
        for (i = start; i < length; i++) {
            // 检测是否需要交换
            if (canSwap(listArr, start, i)) {
                swap(listArr, start, i);
                arguments.callee(listArr, start + 1, callback);
                swap(listArr, start, i);
            }
        }
    }
};

/**
 * 全组合
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

/**
 * 部分组合
 * 我们不需要全部的组合，只需要指定selectNum个空去进行组合
 * @param listArr
 * @param selectNum
 * @param callback
 */
var combinateWithoutAll = function(listArr ,selectNum, callback) {
    var listCount = [], // 计数器数组
        result = [],
        length = listArr.length,
        oneCount = 0,   // 统计出现过的1
        i,
        canPrint = true;

    init(listCount, selectNum, length - 1);

    while (checkEnd(listCount, selectNum)) {
        store(listArr, listCount, result);

        if (canPrint) {
            callback(result);
        }

        canPrint = true;

        for (i = 0; i < length; i++) {

            if (listCount[i] === 0 && oneCount !== 0) {

                listCount[i - 1] = 0;
                listCount[i] = 1;

                // 去除重复的无用项
                if (!canSwap(listArr, 0, i)) {
                    canPrint = false;
                }
                //console.log('before', listCount);

                init(listCount, oneCount - 1, i - 2);
                oneCount = 0;
                break;

            } else if (listCount[i] === 1) {
                oneCount++;
            }

        }
    }


    store(listArr, listCount, result);
    callback(result);

    /**
     * 对 0 / 1结构进行初始化
     * 前num个为 1
     * 直到end为止为0
     * @param listCount
     * @param num
     * @param end
     */
    function init (listCount, num, end) {
        var i = 0;
        for (i = 0; i < num; i++) {
            listCount[i] = 1;
        }

        for (; i <= end; i++) {
            listCount[i] = 0;
        }
    }

    /**
     * 存储结果
     * @param listArr
     * @param listCount
     * @param result
     */
    function store(listArr, listCount, result) {
        var length = listCount.length,
            i,
            j = 0;

        for (i = 0; i < length; i++) {
            if (listCount[i] === 1) {
                result[j++] = listArr[i];
            }
        }
    }

    /**
     * 检查是否是最后一个组合情况
     * @param listCount
     * @param selectNum
     * @returns {boolean}
     */
    function checkEnd(listCount, selectNum) {
        var length = listCount.length,
            i = length - 1,
            end = length - selectNum;
        //console.log('check', listCount);
        for (i = length - 1; i >= end; i--) {
            if (listCount[i] !== 1) {
                return true;
            }
        }

        return false;
    }
};

/**
 * 利用全排列的思路，先截断后去重
 * @param listArr
 * @param selectorNum
 * @param callback
 */
var permutateWithoutAll = function(listArr, selectorNum, callback) {
    var resultHash = {},
        result = [],
        i = 0;

    permutateWithoutTheSame(listArr, 0, function(arr) {
        var index = arr.slice(0, selectorNum).join(',');
        resultHash[index] = '';
    });

    for (var index in resultHash) {
        if (resultHash.hasOwnProperty(index)) {
            result[i++] = index.split(',');
            callback(result[i - 1]);
        }
    }
};

var setRandomArray = function(arr) {
    for (var i = 0; i < 50; i++) {
        arr[i] = parseInt(Math.random() * 1000000);
    }
};
var arr = [];
setRandomArray(arr);

permutate(arr, 0, function() {

});
/*

permutateWithoutTheSame(arr, 0, function(arr) {
    /!*console.log(arr.join(''));*!/
});
*/



/*permutateWithoutAll(arr, 2, function(result) {
/!*

    console.log(result.join(','));
*!/

});*/


combinateWithoutAll(arr, 8, function(result) {
    //console.log(result);
    permutateWithoutTheSame(result, 0, function(pResult) {
        /*console.log(pResult);*/
    })
});
