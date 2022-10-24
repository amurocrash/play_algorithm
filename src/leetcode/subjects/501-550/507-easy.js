var checkPerfectNumber = function(num) {
  if (num === 1) {
    return false
  }

  const factors = new Set()
  factors.add(1)
  let f = 2
  let bound = Math.floor(num / 2)
  while(f < bound) {
    if (num % f === 0) {
      factors.add(f)
      factors.add(num / f)
    }
    f++
  }

  let sum = 0
  for (const e of factors) {
    sum += e
  }
  if (sum === num) {
    return true
  }

  return false
}

console.log(checkPerfectNumber(7))