/**
 * Created by SkyAo on 16/1/23.
 *
 * Title: 数组去重
 *
 * Function: 为 Array 对象添加一个去除重复项的方法
 *
 * Numbers Of Method: 1
 */
Array.prototype.uniq = function() {
    var arr = [],
        hasNaN = false; // 用于NaN的Flag

    this.forEach(function(value) {
        if (arr.indexOf(value) == -1) {
            if (value === value || !hasNaN) {
                // isNaN对于所有不能转换为数字的内容都会返回true,只能使用NaN的第二个特性:不相等.来进行处理
                if (value !== value)
                    hasNaN = true;
                arr.push(value);
            }
        }
    });

    return arr;
};

console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq());