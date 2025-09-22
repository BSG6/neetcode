class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
  // if the strings are not the same length they cant be anagrams
  if (s.length != t.length){
    return false
  }
  // this creates a map to storke counts of characters from s (and t later)
  let counts = new Map()
  
  // loop through each characters in s
  for (let i = 0; i < s.length; i++) {
    // get current character 
    let char = s[i] 
    if (counts.has(char)){
      // if the char exists in the map increase the count
      counts.set(char, counts.get(char) +1)
    }else{
      // if the character doesnt exist initialize it "start a         count for it. "
      counts.set(char,1)
    }
    
  }
  // loop through characters in t
  for(let j = 0; j < t.length;j++ ){
    // get current characters
    let char = t[j]
    // if the map doesnt have the chararcter in it 
    if (!counts.has(char)){
      return false
    }else{
      // if it doesn subtract one from the count of that chararcter
      counts.set(char, counts.get(char) -1)
      // if count goes below zero that means one string has more of one character "not an anagram"
      if (counts.get(char)< 0){
        return false
      }
    }
  }
    // completed all steps still here must be an anagram
    return true
  
}
}
