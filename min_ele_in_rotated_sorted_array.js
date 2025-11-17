//O(n) time complexity and O(1) space complexity
var findMin = function(nums) {
    let minVal = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < minVal) {
            minVal = nums[i];
        }
    }
    return minVal;
};

//O(log n) time complexity and O(1) space complexity
var findMinOptimized = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);   
        if (nums[mid] > nums[right]) {
            left = mid + 1;                          
        } else {
            right = mid;                             
        }           
    }
    return nums[left];                             
}

