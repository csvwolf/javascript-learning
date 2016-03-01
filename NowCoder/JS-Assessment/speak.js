/**
 * Created by SkyAo on 16/2/6.
 *
 * Title: 函数的上下文
 *
 * Function: 将函数 fn 的执行上下文改为 obj 对象
 *
 * Numbers Of Method: 1
 */

/**
 * 在这题中 call与apply可等效使用
 * @param fn
 * @param obj
 * @returns {*}
 */
var speak = function(fn, obj) {
    //return fn.apply(obj);

    return fn.call(obj);
};

console.log(speak(function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'}));