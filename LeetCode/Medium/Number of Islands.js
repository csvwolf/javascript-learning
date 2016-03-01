/**
 * Created by SkyAo on 16/2/23.
 *
 * Title: Number of Islands
 *
 * Function: Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * Numbers Of Method:
 *
 * Problem Link: https://leetcode.com/problems/number-of-islands/
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length == 0)
        return 0;

    var i,
        j,
        iLength = grid.length,
        jLength = grid[0].length,
        counter = 0;



    for (i = 0; i < iLength; i++) {
        for (j = 0; j < jLength; j++) {
            if (grid[i][j] == '1') {
                if (i === iLength - 1 && j === jLength - 1) {
                    counter++;
                } else if (i === iLength - 1){
                    if (grid[i][j + 1] == '0') {
                        counter++;
                    }
                    continue;
                } else if (j === jLength - 1) {
                    if (grid[i+1][j] == '0') {
                        counter++;
                    }
                    continue;
                } else if (grid[i+1][j] == '0' && grid[i][j+1] == '0') {
                    counter++;
                }

            }
        }
    }


    return counter;
};

11000
11000
00100
00011
console.log(0 == '0');
console.log(numIslands([[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1]]));