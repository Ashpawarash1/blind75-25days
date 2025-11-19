var missingNumber = function(nums) {
    const n = nums.length;
    const expected = n * (n + 1) / 2;
    const actual = nums.reduce((a, b) => a + b, 0);
    return expected - actual;
};
// Time Complexity: O(n)   
// Space Complexity: O(1)

var missingNumber = function(nums) {
    let xor = 0;
    const n = nums.length;

    // XOR with all indices
    for (let i = 0; i <= n; i++) {
        xor ^= i;
    }
    // XOR with all array values
    for (let num of nums) {
        xor ^= num;
    }
    return xor;
};
// Time Complexity: O(n)   
// Space Complexity: O(1)

var missingNumber = function(nums) {
    let n = nums.length;
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    const expected = n * (n + 1) / 2;
    return expected - sum;
};
// Time Complexity: O(n)   
// Space Complexity: O(1)