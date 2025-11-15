/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//o(n) solution
var twoSum = function(nums, target) {
    const mp = new Map([]);
    for(let i=0 ;i<nums.length ;i++)
    {
        if(mp.has(target-nums[i]))
        {
            return [mp.get(target-nums[i]), i];
        }
        else{
            mp.set(nums[i],i);
        }
    }
    return [];
};


//o(n^2) solution
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
