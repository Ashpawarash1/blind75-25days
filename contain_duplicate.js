// Best Approach: HashSet (your solution)

var containsDuplicate = function(nums) {
    const st = new Set();
    for (let num of nums) {
        if (st.has(num)) return true;
        st.add(num);
    }
    return false;
};


// Sorting Method (slower: O(n log n))
var containsDuplicate = function(nums) {
    nums.sort((a,b)=>a-b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) return true;
    }
    return false;
};


// Brute Force (O(n²))
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) return true;
    }
}
return false;
