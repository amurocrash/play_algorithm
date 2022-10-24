var countSegments = function(s) {
  let count = 0
  let start = false
  for(let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === ' ') {
      if (start) {
        count++
        start = false
      }
    } else {
      if (!start) {
        start = true
      }
    }
  }

  if (start) {
    count++
  }

  return count
}

const s = ' Hello my name is    john '
console.log(countSegments(s))