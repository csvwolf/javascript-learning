/**
 * Created by SkyAo on 16/1/19.
 *
 * Title: Power of Three
 *
 * Function: Given an integer, write a function to determine if it is a power of three.
 *
 * Number Of Methods Now: 2
 *
 * Problem Link: https://leetcode.com/problems/power-of-three/
 */

var isPowerOfThree = function(n) {
    // 3^20 < 2^32 in the scope of integer
     return (n > 0 && 3486784401 % n === 0);
};

var isPowerOfThree2 = function(n) {
    // Common Method: Recursive

    if (n <= 0) {
        return false;
    }

    // 3^0

    if (n == 1) {
        return true;
    }

    if (n <= 3) {
        return n % 3 === 0;
    }

    return arguments.callee(n / 3);
};

var isPowerOfThreeNotWork = function(n) {
    // The Method works in Java, but not work in JavaScript
    // If log3(n) is integer, the result is true. (Use Math method)
     return (Math.log(n) / Math.log(3)) % 1 === 0;
};

console.log(isPowerOfThree2(3.1));