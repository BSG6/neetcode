twoSum(numbers, target) {

    let left = 0;                     // start pointer
    let right = numbers.length - 1;   // end pointer
  
    while (left < right) {
      const sum = numbers[left] + numbers[right];
  
      if (sum === target) {
        // found it! +1 because answer is 1-indexed
        return [left + 1, right + 1];
      } else if (sum < target) {
        // sum too small → move left pointer forward
        left++;
      } else {
        // sum too big → move right pointer backward
        right--;
      }
    }
    return [];
  }
  
  
  