/**
 * 11. Container With Most Water
 * Approaches:
 * 1️⃣ Brute Force (O(n²))
 * 2️⃣ Two Pointer Optimal (O(n))
 */

/* -------------------------------------------
   1️⃣ Brute Force Approach
   Time Complexity:  O(n²)
   Space Complexity: O(1)
   ------------------------------------------- */

var maxAreaBrute = function(height) {
    let max = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            // Width = j - i
            // Height = min(height[i], height[j])
            let curr = (j - i) * Math.min(height[i], height[j]);
            max = Math.max(max, curr);
        }
    }

    return max;
};


/* -------------------------------------------
   2️⃣ Two Pointer Approach (Optimal)
   Time Complexity:  O(n)
   Space Complexity: O(1)
   ------------------------------------------- */

var maxArea = function(height) {
    let st = 0;
    let en = height.length - 1;
    let mx = 0;

    while (st < en) {
        let curr = (en - st) * Math.min(height[st], height[en]);
        mx = Math.max(mx, curr);

        // Move the pointer with smaller height
        if (height[st] < height[en]) {
            st++;
        } else {
            en--;
        }
    }

    return mx;
};
