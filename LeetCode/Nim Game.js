/**
 * Created by SkyAo on 16/1/19.
 *
 * Title: Nim Game
 *
 * Function: determine whether you can win the game given the number of stones in the heap(You can take turns to remove 1 to 3 stones)
 *
 * Number Of Methods Now: 1
 *
 * Problem Link: https://leetcode.com/problems/nim-game/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    // It's a logical question
    return n % 4 !== 0;
};

console.log(canWinNim(3));