class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        
  const count = new Array(26).fill(0);
  let left = 0, best = 0, maxFreq = 0;

  const sid = (ch) => ch.charCodeAt(0) - 65; // 'A' -> 0

  for (let right = 0; right < s.length; right++) {
    const r = sid(s[right]);
    count[r]++;
    maxFreq = Math.max(maxFreq, count[r]);

    // If we need more than k replacements, shrink from the left
    while (right - left + 1 - maxFreq > k) {
      count[sid(s[left])]--;
      left++;
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}

    }
