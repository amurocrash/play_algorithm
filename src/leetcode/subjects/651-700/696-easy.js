var countBinarySubstrings = function(s) {
  let last = s[0]
  let lastCount
  let count = 1
  let sum = 0
  for(let i = 1; i <= s.length; i++) {
    const c = s[i]
    if (c === last) {
      count++
    } else {
      if (lastCount !== undefined || i === undefined) {
        sum += Math.min(lastCount, count)
      }
      lastCount = count
      last = c
      count = 1
    }
  }

  return sum
}

const s = '00110011'
console.log(countBinarySubstrings(s)) // [2, 2, 2, 2]