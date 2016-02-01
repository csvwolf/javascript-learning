/**
 * Created by SkyAo on 16/1/31.
 *
 * Title: Coin Change
 *
 * Function: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * Numbers Of Method: 1
 *
 * Problem Link: https://leetcode.com/problems/coin-change/
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var length = coins.length,
        curr = length - 1,
        min = -1,
        arr = [],
        i = 1,
        j = length - 1;

    coins.sort(function(a, b) {
        return a - b;
    });

    arr[0] = 0;

    for (i = 1; i <= amount; i++) {
        min = -1;

        for (j = length - 1; j >= 0; j--) {
            if (coins[j] <= i) {
                curr = arr[i - coins[j]];

                if (min === -1 || min > curr && curr !== -1) {
                    min = curr;
                }
            }
        }

        if (min !== -1) {
            arr[i] = min + 1;
        }
        else {
            arr[i] = -1;
        }
    }

    return arr[amount];
};

console.log(coinChange([186,419,83,408], 6249));