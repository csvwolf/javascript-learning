/**
 * Created by SkyAo on 16/2/5.
 *
 * Title: Ugly Number
 *
 * Function: Write a program to check whether a given number is an ugly number.
 *           Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
 *
 * Numbers Of Method: 2
 *
 * Problem Link: https://leetcode.com/problems/ugly-number/
 */

/**
 * The Method is wrong when number is large
 * No Enough Memory
 * @param {number} num
 * @return {boolean}
 */
var WrongMethodIsUgly = function(num) {
    var result = [false, true];

    for (var i = 2; i <= num; i++) {
        if (i % 2 === 0) {
            if (result[i / 2] === true) {
                result[i] = true;
                continue;
            }
        }

        if (i % 3 === 0) {
            if (result[i / 3] === true) {
                result[i] = true;
                continue;
            }
        }

        if (i % 5 === 0) {
            if (result[i / 5] === true) {
                result[i] = true;
                continue;
            }
        }

        result[i] = false;
    }

    return result[num];
};

var isUgly = function(num) {
    if (num === 0) {
        return false;
    } else if (num === 1) {
        return true;
    } else if (num % 2 === 0) {
        return isUgly(num / 2);
    } else if (num % 3 === 0) {
        return isUgly(num / 3);
    } else if (num % 5 === 0) {
        return isUgly(num / 5);
    } else {
        return false;
    }
};

var isUgly2 = function(num) {
    if (num === 0) {
        return false;
    }

    while (num % 2 === 0) {
        num /= 2;
    }

    while (num % 3 === 0) {
        num /= 3;
    }

    while (num % 5 === 0) {
        num /= 5;
    }

    return num === 1;
};

console.log(isUgly2(2147483648));