/**
 * Created by SkyAo on 16/2/4.
 *
 * Title: Climbing Stairs
 *
 * Function: You are climbing a stair case. It takes n steps to reach to the top.
 *
 * Numbers Of Method: 1
 *
 * Problem: https://leetcode.com/problems/climbing-stairs/
 */

/**
 * The method will boom in a large number like 44
 * Time Limit Exceeded
 * @param {number} n
 * @return {number}
 */
var wrongMethodToClimbStairs = function(n) {
    switch (n) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return arguments.callee(n - 1) + arguments.callee(n - 2);
    }
};
/**
 * Use DP to solve the problem
 * @param n
 * @returns {number}
 */
var climbStairs = function(n) {
    var result = [0, 1, 2];

    for (var i = 3; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }

    return result[n];
};

console.log(climbStairs(44));