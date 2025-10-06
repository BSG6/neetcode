class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        
  let minPrice = Infinity;
  let best = 0;

  for (const p of prices) {
    // profit if we sell today
    best = Math.max(best, p - minPrice);
    // keep track of the cheapest day so far
    minPrice = Math.min(minPrice, p);
  }
  return best;
}

    }