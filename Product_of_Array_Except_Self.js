// Approach 1: Brute Force — O(n²), O(1)
var productExceptSelfBrute = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        let prod = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) prod *= nums[j];
        }
        res.push(prod);
    }
    return res;
};



// Approach 2: Using Division — O(n), O(1)
var productExceptSelfDivision = function(nums) {
    let zeroCount = 0, totalProduct = 1;

    for (let num of nums) {
        if (num === 0) zeroCount++;
        else totalProduct *= num;
    }

    const res = new Array(nums.length).fill(0);

    if (zeroCount > 1) return res;

    for (let i = 0; i < nums.length; i++) {
        if (zeroCount === 1) {
            if (nums[i] === 0) res[i] = totalProduct;
        } else {
            res[i] = totalProduct / nums[i];
        }
    }
    return res;
};


// Approach 3: Prefix + Suffix Arrays — O(n), O(n)
var productExceptSelfDivision = function(nums) {
    const n = nums.length;
    const prefix = new Array(n).fill(1);
    const suffix = new Array(n).fill(1);
    const res = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        res[i] = prefix[i] * suffix[i];
    }

    return res;
};


// Approach 4: Optimized Prefix + Suffix — O(n), O(1)
var productExceptSelfOptimized = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);               
    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }
    return res;
};      