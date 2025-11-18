/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        let carry = (a & b) << 1; // common set bits -> carry
        a = a ^ b;                // sum without carry
        b = carry;                // move carry to b
    }
    return a;
};
// Time Complexity: O(1)   
// Space Complexity: O(1)