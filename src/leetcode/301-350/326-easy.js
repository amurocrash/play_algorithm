var isPowerOfThree = function(n) {
  if (n <= 0) {
    return false
  }

  while(n > 1) {
    if (n % 3 !== 0) {
      return false
    }
    n = n / 3
  }

  return true
}

function _isPower (n) {
  if (n === 1) {
    return true
  }

  return _isPower(Math.floor(n / 3))
}