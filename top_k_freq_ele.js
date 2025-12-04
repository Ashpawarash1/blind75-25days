

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = new Map();

    for(let n of nums){
        freq.set(n,(freq.get(n) || 0) + 1);
    }

    const buckets = Array(nums.length + 1).fill().map(() => []);

    for(let [num, count] of freq){
        buckets[count].push(num);
    }
    let res = [];
    for(let i = buckets.length-1 ; i>=0 && res.length<k ;i--){
        for(let num of buckets[i])
        {
            res.push(num);
            if (res.length === k) return res;

        }
    }
    return res;
};
// ```// Time Complexity: O(n) where n is the number of elements in nums
// Space Complexity: O(n) for the frequency map and buckets array


class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> freq;

        // Step 1: count frequency
        for (int n : nums) freq[n]++;

        // Step 2: min heap of size k
        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> minHeap;

        for (auto &p : freq) {
            minHeap.push({p.second, p.first}); // {frequency, number}

            if (minHeap.size() > k)
                minHeap.pop(); // remove lowest frequency
        }

        // Step 3: extract answer
        vector<int> result;
        while (!minHeap.empty()) {
            result.push_back(minHeap.top().second);
            minHeap.pop();
        }

        return result;
    }
};
// Time Complexity: O(n log k) where n is the number of elements in nums
// Space Complexity: O(n) for the frequency map and O(k) for the heap