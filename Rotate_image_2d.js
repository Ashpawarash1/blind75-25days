/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n =matrix.length;

    for(let i=0;i< n;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for(let i=0;i<n;i++)
    {
        matrix[i].reverse();
    }
};


// Time Complexity: O(n^2) where n is the number of rows (or columns) in the matrix
// Space Complexity: O(1)