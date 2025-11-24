var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const rows = new Array(m).fill(false);
    const cols = new Array(n).fill(false);

    // First pass: record rows/cols that must be zeroed
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = true;
                cols[j] = true;
            }
        }
    }

    // Second pass: set zeros
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rows[i] || cols[j]) matrix[i][j] = 0;
        }
    }
};

// Time Complexity: O(m*n) where m is the number of rows and n is the number of columns
// Space Complexity: O(m + n) for the additional row and column arrays