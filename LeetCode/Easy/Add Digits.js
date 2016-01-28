/**
 * Created by SkyAo on 16/1/19.
 *
 * Title: Add Digits
 *
 * Function: Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 *
 * Number of Methods Now:
 *
 * Problem Link: https://leetcode.com/problems/add-digits/
 */


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num.toString().length > 1) {
        var arr = num.toString().split('');
        var sum = 0;
        arr.forEach(function(value) {
            sum += parseInt(value);
            return sum;
        });
        num = sum;
    }

    return num;
};

var addDigits2 = function(num) {

    // The digital root rule is in the wiki: https://en.wikipedia.org/wiki/Digital_root
    if (num === 0)
        return 0;

    var result = num % 9;

    return result === 0 ? 9 : result;
};

console.log(addDigits2(0));