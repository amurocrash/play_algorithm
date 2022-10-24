var findTheDifference = function(s, t) {
  const map1 = new Map()
  for(let i = 0; i < s.length; i++) {
    const c = s[i]
    let count = map1.get(c)
    if (count === undefined) {
      map1.set(c, 1)
    } else {
      map1.set(c, count + 1)
    }
  }

  const map2 = new Map()
  for(let i = 0; i < t.length; i++) {
    const c = t[i]
    let count = map2.get(c)
    if (count === undefined) {
      map2.set(c, 1)
    } else {
      map2.set(c, count + 1)
    }
  }

  for(let entry of map2) {
    const [key, count] = entry
    if (!map1.has(key) || map1.get(key) !== count) {
      return key
    }
  }
}