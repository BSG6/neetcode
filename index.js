function isPalindrome(s) {
    // 
    // turn everything lowercase and strip out non-letters/numbers
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    //  two pointers
    let left = 0;
    let right = cleaned.length - 1;
  
    //  move toward the middle
    while (left < right) {
      if (cleaned[left] !== cleaned[right]) {
        // letters/numbers don't match → not a palindrome
        return false;
      }
      left++;
      right--;
    }
  
    //  finished loop  → it's valid
    return true;
  }
  