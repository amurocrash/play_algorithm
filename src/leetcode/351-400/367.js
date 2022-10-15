var isPerfectSquare = function(num) {
  if (num <= 1) {
    return true
  }

  let l = 0
  let r = Math.floor(num / 2)

  while(l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    const cur = mid * mid
    if (cur === num) {
      return true
    } else if (cur < num) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return false
}

const num = 5
console.log(isPerfectSquare(num))