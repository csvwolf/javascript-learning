/**
 * Created by SkyAo on 16/1/30.
 *
 * Title: Roman to Integer
 *
 * Function: Given a roman numeral, convert it to an integer.
 *
 * Numbers Of Method: 4
 *
 * Problem Link: https://leetcode.com/problems/roman-to-integer/
 */

/**
 * use object to find the value
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var length = s.length,
        num = 0,
        roman = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000},
        next = 0,
        curr = 0;

    // use variable to buffer the object value
    curr = roman[s[length - 1]];
    num += curr;
    next = curr;

    for (var i = length - 2; i >= 0; i--) {
        curr = roman[s[i]];

        if (next <= curr) {
            num += curr;
        } else {
            num -= curr;
        }

        next = curr;
    }

    return num;
};

/**
 * using switch-case is a bit faster
 * @param s
 * @returns {number}
 */
var romanToInt2 = function(s) {
    var length = s.length,
        num = 0,
        next = 0,
        curr = 0;


    for (var i = length - 1; i >= 0; i--) {

        switch (s[i]) {
            case 'I':
                curr = 1;
                break;
            case 'V':
                curr = 5;
                break;
            case 'X':
                curr = 10;
                break;
            case 'L':
                curr = 50;
                break;
            case 'C':
                curr = 100;
                break;
            case 'D':
                curr = 500;
                break;
            case 'M':
                curr = 1000;
                break;
        }

        if (i === length - 1) {
            num += curr;
        } else {
            if (next <= curr) {
                num += curr;
            } else {
                num -= curr;
            }
        }


        next = curr;
    }

    return num;
};

/**
 * we use reduceRight to sum the num
 * @param s
 * @returns {*}
 */
var romanToInt3 = function(s) {
    var length = s.length,
        next = 0;


    // reduceRight should be an array
    return s.split('').reduceRight(function(prev, curr, index) {

        switch (s[index]) {
            case 'I':
                curr = 1;
                break;
            case 'V':
                curr = 5;
                break;
            case 'X':
                curr = 10;
                break;
            case 'L':
                curr = 50;
                break;
            case 'C':
                curr = 100;
                break;
            case 'D':
                curr = 500;
                break;
            case 'M':
                curr = 1000;
                break;
        }

        if (index === length - 1) {
            next = curr;
            return prev + curr;
        } else {
            if (next <= curr) {
                next = curr;
                return prev + curr;
            } else {
                next = curr;
                return prev - curr;
            }
        }
    }, 0);  // init the prev is 0, otherwise it will be a string

};

/**
 * use call instead of split
 * @param s
 * @returns {*}
 */
var romanToInt4 = function(s) {
    var length = s.length,
        next = 0;


    // use call to change the object to call the function
    return Array.prototype.reduceRight.call(s, function(prev, curr, index) {

        switch (s[index]) {
            case 'I':
                curr = 1;
                break;
            case 'V':
                curr = 5;
                break;
            case 'X':
                curr = 10;
                break;
            case 'L':
                curr = 50;
                break;
            case 'C':
                curr = 100;
                break;
            case 'D':
                curr = 500;
                break;
            case 'M':
                curr = 1000;
                break;
        }

        if (index === length - 1) {
            next = curr;
            return prev + curr;
        } else {
            if (next <= curr) {
                next = curr;
                return prev + curr;
            } else {
                next = curr;
                return prev - curr;
            }
        }
    }, 0);

};