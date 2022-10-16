var repeatedSubstringPattern = function(s) {
  const length = s.length
  const half = Math.floor(length / 2)
  for(let i = 1; i <= half; i++) {
    const s_ = s.slice(0, i)
    
    const count = s_.length
    let j = 0
    let isSub = true
    while(j < length) {
      const s__ = s.slice(j, j + count)
      if (s_ !== s__) {
        isSub = false
        break
      }
      j += count
    }

    if (isSub) {
      return isSub
    }
  }

  return false
}

const s = 'a'
console.log(repeatedSubstringPattern(s))