/**
 * Created by SkyAo on 16/1/20.
 *
 * Title: 修改this指向
 *
 * Function: 封装函数f,使f的this指向指定的对象
 *
 * Number of Method: 2
 *
 */

var bindThis = function(f, oTarget) {
    return function() {
        return f.apply(oTarget, arguments);
    }
};

var bindThis2 = function(f, oTarget) {
    return f.bind(oTarget);
};

console.log(bindThis2(function(a, b){return this.test + a + b}, {test: 1})(2, 3));