var hasAlternatingBits = function(n) {
  if (n === 1) {
    return false
  }

  let last
  while(n > 0) {
    let cur = n % 2
    if (last === undefined) {
      last = cur
    } else {
      if (last === cur) {
        return false
      }

      last = cur
    }

    n = Math.floor(n / 2)
  }

  return true
}

const n = 5
console.log(hasAlternatingBits(n))