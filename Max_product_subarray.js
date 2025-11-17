/**
 * @param {number[]} nums
 * @return {number}
 */
//O(n) time complexity and O(1) space complexity
var maxProduct = function(nums) {
    let maxProd = nums[0];
    let minProd = nums[0];
    let ans = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i];

        // temp saved because maxProd will change first
        let tempMax = Math.max(curr, curr * maxProd, curr * minProd);
        minProd = Math.min(curr, curr * maxProd, curr * minProd);

        maxProd = tempMax;
        ans = Math.max(ans, maxProd);
    }

    return ans;
};
