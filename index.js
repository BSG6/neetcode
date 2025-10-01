threeSum(nums) {
       
    //  sort so two-pointer works and skipping duplicates is easy
    nums.sort((a, b) => a - b);
  
    const res = [];
  
    //  fix the first number at index i, then 2-pointer on the right side
    for (let i = 0; i < nums.length - 2; i++) {
      // skip duplicate anchors to avoid duplicate triplets
      if (i > 0 && nums[i] === nums[i - 1]) continue;
  
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (sum === 0) {
          // found a valid triplet
          res.push([nums[i], nums[left], nums[right]]);
  
          // move left forward, skipping duplicates
          left++;
          while (left < right && nums[left] === nums[left - 1]) left++;
  
          // move right backward, skipping duplicates
          right--;
          while (left < right && nums[right] === nums[right + 1]) right--;
  
        } else if (sum < 0) {
          // need a bigger sum → move left up
          left++;
        } else {
          // sum > 0: need a smaller sum → move right down
          right--;
        }
      }
    }
  
    return res;
  }
  