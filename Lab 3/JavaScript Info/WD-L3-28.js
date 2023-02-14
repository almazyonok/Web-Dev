function unique(arr) {
  return Array.from(new Set(arr))
}


function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
  }

  return Array.from(map.values());
}

let keys = Array.from(map.keys());