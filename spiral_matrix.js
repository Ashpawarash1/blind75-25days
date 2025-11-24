var spiralOrder = function(matrix) {
    let res = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // 1) move left → right on top row
        for (let j = left; j <= right; j++) res.push(matrix[top][j]);
        top++;

        // 2) move top → bottom on right col
        for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
        right--;

        // 3) move right → left on bottom row (only if still valid)
        if (top <= bottom) {
            for (let j = right; j >= left; j--) res.push(matrix[bottom][j]);
            bottom--;
        }

        // 4) move bottom → top on left col (only if still valid)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
            left++;
        }
    }
    return res;
};
// Time Complexity: O(m*n) where m is the number of rows and n is the number of columns
// Space Complexity: O(1) ignoring the output array