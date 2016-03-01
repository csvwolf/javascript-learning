/**
 * Created by SkyAo on 16/2/5.
 *
 * Title: 正确的函数定义
 *
 * Function: 请修复给定的 js 代码中，函数定义存在的问题
 *
 */

function functions(flag) {
    var getValue;
    if (flag) {
        getValue = function() { return 'a'; }
    } else {
        getValue = function() { return 'b'; }
    }

    return getValue();
}

console.log(functions(true));
