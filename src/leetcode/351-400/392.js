// s是否是t的子序列
var isSubsequence = function(s, t) {
  if (s.length > t.length) {
    return false
  }

  if (s.length === 0) {
    return true
  }

  let i = 0
  let j = 0

  while(j < t.length) {
    const c_s = s[i]
    const c_t = t[j]

    if (c_s === c_t) {
      i++
      if (i === s.length) {
        return true
      }
    } 
    j++
  }

  return false
}