function findMinDistance(i, indexes) {
  let min
  for(let j = 0; j < indexes.length; j++) {
    const dis = Math.abs(i - indexes[j])
    if (min === undefined || dis < min) {
      min = dis
    }
  }

  return min
}

var shortestToChar = function(s, c) {
  const c_indexes = []
  for(let i = 0; i < s.length; i++) {
    const item = s[i]
    if (item === c) {
      c_indexes.push(i)
    }
  }

  const res = []
  for(let i = 0; i < s.length; i++) {
    const item = s[i]
    if (item === c) {
      res.push(0)
    } else {
      res.push(findMinDistance(i, c_indexes))
    }
  }

  return res
}

const s = "loveleetcode", c = "e"
console.log(shortestToChar(s, c))