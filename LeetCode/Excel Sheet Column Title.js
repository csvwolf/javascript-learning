/**
 * Created by SkyAo on 16/1/24.
 *
 * Title: Excel Sheet Column Title
 *
 * Function: Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 *
 * Numbers of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/excel-sheet-column-title/
 */

/**
 * dec to base-26
 *
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var num = n,
        remaining,
        title = '',
        startAscii = 'A'.charCodeAt(0) - 1;

    while (num > 0) {
        remaining = num % 26;

        // if the remaining is 0, this should be Z
        if (remaining === 0) {
            remaining = 26;
        }


        title = String.fromCharCode(startAscii + remaining) + title;

        num = Math.floor((num - 1) / 26);
    }

    return title;
};

console.log(convertToTitle(28));