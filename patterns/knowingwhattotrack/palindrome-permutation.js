function permutePalindrome(string) {
  const map = new Map();
  for (const i of string) {
    if (map.has(i)) {
      let oldValue = map.get(i);
      map.set(i, oldValue + 1);
    } else {
      map.set(i, 1);
    }
  }
  let occuranceCount = 0;
  map.forEach((value, key) => {
    console.log(value);
    if (value % 2) {
      occuranceCount++;
    }
  });
  if (occuranceCount > 1) {
    return false;
  } else {
    return true;
  }
}

console.log(permutePalindrome("abab"));
