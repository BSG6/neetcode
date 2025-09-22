// Given an integer array nums, 
// return true if any value appears more than once in the array, 
// otherwise return false.

// Params an array of nums
// return what do i need to return? I need to return a true if any number appears in the array more than once, if not return false
// Explanation I need to go through the array and see iif there is any number that duplicates, if there is i need to return true, if it isnt return false.
// Psuedo code 
// loop through the array
// if there is a duplicate number push it into another array if another array doesnt work maybe there is some way i can create a counter. if no duplicates return false

hasDuplicate(nums) {
    // start with an empty array
let dup = [] 
for (let i = 0; i < nums.length; i++) {
  let num = nums[i]
  // check if the number has a duplicate
  if (dup.includes(num)){
    return true
  }
   // if not add the duplicate number to the array
  dup.push(num)
}
   // if there is no duplicate 
return false 
 }
