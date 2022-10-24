var checkRecord = function(s) {
  let countA = 0
  let continuousL = 0
  for(let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === 'L') {
      continuousL++
      if (continuousL === 3) {
        return false
      }
    } else {
      if (c === 'A') {
        countA++
      }
      continuousL = 0
    }
  }

  if (countA < 2) {
    return true
  }

  return false
}

const s = 'LALL'
console.log(checkRecord(s))