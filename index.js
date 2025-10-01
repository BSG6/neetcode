function topKFrequent(nums, k) {
  //  count how many times each number shows up
  const freq = new Map();
  for (const num of nums) {
    // if it already exists, add 1, otherwise start it at 1
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  //  turn the map into an array of [num, count]
  const pairs = Array.from(freq.entries());

  //  sort by count, biggest to smallest
  pairs.sort((a, b) => b[1] - a[1]);

  //  take the first k numbers
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(pairs[i][0]); // push the number, not the count
  }

  return result;
}
