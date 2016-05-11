/**
 * Created by SkyAo on 16/3/13.
 *
 * 将数组中的字母与*分开,要求时间复杂度On,空间复杂度O1
 */

var arr = ['*', 'a', 'b', '*', 'a', 'c', '*', 'm'];

var sort = function(arr) {
    var counter = new Array(27),
        index = 0,      // 计数数组的索引值
        startAscii = 'a'.charCodeAt(0),
        arrIndex = 0;   // 代排序数组的索引值

    // 首先,统计出现频率
    arr.forEach(function(elem) {
        index = (elem == '*') ? 0 : elem.charCodeAt(0) - startAscii + 1;

        if (isNaN(counter[index])) {
            counter[index] = 1;
        } else {
            counter[index]++;
        }
    });


    index = 0;

    // 然后,将统计完毕的值依次注入原数组,这样就能保证O1了
    while (index < 26) {
        if (!counter[index] || counter[index] == 0) {
            index++;
            continue;
        }

        counter[index]--;
        if (index == 0) {
            arr[arrIndex++] = '*';
        } else {
            arr[arrIndex++] = String.fromCharCode(index + startAscii - 1);
        }

    }

    return arr;
};

console.log(sort(arr));