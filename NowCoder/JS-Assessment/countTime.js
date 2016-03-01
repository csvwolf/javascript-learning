/**
 * Created by SkyAo on 16/2/5.
 *
 * Title: 计时器
 *
 * Function: 实现一个打点计时器，要求
 *           1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
 *           2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
 *           3、第一个数需要立即输出
 *
 * Numbers Of Method: 2
 */

/**
 * 使用setInterval的方法
 * @param start
 * @param end
 * @returns {{cancel: cancel}}
 */
var count = function(start, end) {
    // 立即输出
    console.log(start++);

    var intervalId = setInterval(function() {
        if (start <= end) {
            console.log(start++);
        } else {
            // 如果已经到了,需要停下来
            clearInterval(intervalId);
        }
    }, 100);

    return {cancel: function() { clearInterval(intervalId); }};
};

/**
 * 使用setTimeout的方法
 * @param start
 * @param end
 * @returns {{cancel: cancel}}
 */
var count2 = function(start, end) {
    var selfFunction = arguments.callee;
    if (start <= end) {
        console.log(start++);
        // timeOutID必须随着函数调用改变,所以需要是全局变量(否则停不下来)
        timeOutID = setTimeout(function() {
            selfFunction(start, end);
        }, 100);
    }

    return {cancel: function() { clearTimeout(timeOutID); }};
};

var timer = count2(0, 100);

setTimeout(function() {
    timer.cancel();
}, 1000);