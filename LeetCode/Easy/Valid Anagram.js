/**
 * Created by SkyAo on 16/1/24.
 *
 * Title: Valid Anagram
 *
 * Function: Given two strings s and t, write a function to determine if t is an anagram of s.
 *
 * Numbers Of Method: 2
 *
 * Problem Link: https://leetcode.com/problems/valid-anagram/
 */

/**
 * use counter to stat the character's frequency of occurrence
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // judge whether the numbers of character is the same
    var counter = [{
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0,
        n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z:0
    }, {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0,
        n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z:0
    }];

    // if the length is not equal, return false
    if (s.length != t.length)
        return false;

    var length = s.length;

    for (var i = 0; i < length; i++) {
        counter[0][s[i]]++;
        counter[1][t[i]]++;
    }

    // method1: use char incresing to compare
/*    var char = 'a';
    for (i = 0; i < 26; i++) {

        if (counter[0][char] != counter[1][char]) {
            return false;
        }

        char = String.fromCharCode(char.charCodeAt(0)+1);
    }*/

    var char;

    // method2: use for-in to judge(slower)
    for (char in counter[0]) {
        // since the attributes of prototype chain will be traversed by for-in, check it
        if (counter[0].hasOwnProperty(char) && [0][char] != counter[1][char]) {
            return false;
        }
    }

    return true;
};

/**
 * compare each element of the array
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function(s, t) {
    // if the length is not equal, return false
    var compArr = [[], []];

    if (s.length != t.length) {
        return false;
    }

    var length = s.length;

    for (var i = 0; i < length; i++) {
        compArr[0].push(s[i]);
        compArr[1].push(t[i]);
    }

    compArr[0].sort();
    compArr[1].sort();

    for (i = 0; i < length; i++) {
        // compare the character
        if (compArr[0][i] != compArr[1][i]) {
            return false;
        }
    }

    return true;
};
console.log(isAnagram("a", "b"));