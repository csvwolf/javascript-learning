/**
 * Created by SkyAo on 16/1/24.
 *
 * Title: Excel Sheet Column Number
 *
 * Function: Given a column title as appear in an Excel sheet, return its corresponding column number.
 *
 * Numbers of Method:
 *
 * Problem Link: https://leetcode.com/problems/excel-sheet-column-number/
 */

/**
 * base-26 to 10
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var length = s.length,
        startAscii = 'A'.charCodeAt(0) - 1,
        num = 0;

    for (var i = length - 1, power = 0; i >= 0; i--, power++) {
        num += (s.charCodeAt(i) - startAscii) * Math.pow(26, power);
    }

    return num;
};

console.log(titleToNumber('AA'));