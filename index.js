class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        
  let best = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const width = j - i;
      const h = Math.min(heights[i], heights[j]);
      const area = width * h;
      if (area > best) best = area;
    }
  }

  return best;
}

    }

