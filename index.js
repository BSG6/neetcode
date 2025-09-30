
function groupAnagrams(strs) {
    const groups = new Map(); // key: sorted word, value: array of anagrams
  
    for (const word of strs) {
      // sort the letters to get the signature, e.g. "cat" -> "act"
      const key = word.split("").sort().join("");
  
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key).push(word);
    }
  
    // convert the map’s values into an array of arrays
    return Array.from(groups.values());
  }
  