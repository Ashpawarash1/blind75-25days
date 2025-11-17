/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // Left part is sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // go left
            } else {
                left = mid + 1; // go right
            }
        }
        // Right part is sorted
        else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1; // go right
            } else {
                right = mid - 1; // go left
            }
        }
    }

    return -1;
};
