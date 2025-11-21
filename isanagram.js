var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
};
// Time Complexity: O(n) where n is the length of the strings
// Space Complexity: O(1) since the character set is fixed (assuming ASCII)

var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};
// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(n) due to the sorted arrays