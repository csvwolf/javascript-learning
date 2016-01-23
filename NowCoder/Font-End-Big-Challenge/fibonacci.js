/**
 * Created by SkyAo on 16/1/23.
 *
 * Title: 斐波那契数列
 *
 * Function: 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
 *
 * Numbers Of Method: 1
 */
var fibonacci = function(n) {
    var former = 1,
        latter = 1,
        temp;

    if (n == 1) {
        return former;
    } else if (n == 2) {
        return latter;
    } else {
        for (var i = 3; i <= n; i++) {
            temp = latter;
            latter = former + latter;
            former = temp;
        }
    }

    return latter;
};

console.log(fibonacci(1000));