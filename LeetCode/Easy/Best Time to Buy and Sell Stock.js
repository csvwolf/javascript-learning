/**
 * Created by SkyAo on 16/5/12.
 *
 * Title: Best Time to Buy and Sell Stock
 *
 * Function: Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 *
 * Numbers Of Methods:
 *
 * Problem Link:
 */


/**
 * search the min and at the same time calculate the diff between current and min numbers
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = Number.MAX_VALUE,
        max = Number.MIN_VALUE,
        diff,
        i,
        length = prices.length;

    for (i = 0; i < length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }

        diff = prices[i] - min;

        if (diff > max) {
            max = diff;
        }
    }

    return max;
};