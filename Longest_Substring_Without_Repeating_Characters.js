/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const st = new Set();
    let left=0, mx= 0;
    for(let j=0;j<s.length;j++){
      while(st.has(s[j])){
        st.delete(s[left]);
        left++;
       }

       mx = Math.max(j- left +1,mx);
       st.add(s[j]);
    }
    return mx;

};

// Time Complexity: O(n) where n is the length of the string
// Space Complexity: O(min(m, n)) where m is the size of the character set and n is the length of the string


