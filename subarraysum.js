/**
 * 3. Maximum Subarray
 * Approaches:
 * 1️⃣ Brute Force (O(n²))
 * 2️⃣ Kadane's Algorithm (O(n))
 */

/* -------------------------------------------
   1️⃣ Brute Force Approach
   Time Complexity:  O(n²)
   Space Complexity: O(1)
   ------------------------------------------- */

var maxSubArrayBrute = function(nums) {
    let mx = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let currsm = 0;

        for (let j = i; j < nums.length; j++) {
            currsm += nums[j];
            mx = Math.max(mx, currsm);
        }
    }

    return mx;
};


/* -------------------------------------------
   2️⃣ Kadane's Algorithm (Optimal)
   Time Complexity:  O(n)
   Space Complexity: O(1)
   ------------------------------------------- */

var maxSubArray = function(nums) {
    let currsm = nums[0], mx = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currsm = Math.max(nums[i], currsm + nums[i]);
        mx = Math.max(mx, currsm);
    }

    return mx;
};
