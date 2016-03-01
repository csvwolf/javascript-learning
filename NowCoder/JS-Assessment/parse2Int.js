/**
 * Created by SkyAo on 16/2/5.
 *
 * Title: 正确的使用 parseInt
 *
 * Function: 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
 */

function parse2Int(num) {
    return parseInt(num, 10);
}

// 正确的输出是 12; 12; 0
console.log(parse2Int('12'), parse2Int('12px'), parse2Int('0x12'));
