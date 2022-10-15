var isPowerOfTwo = function(n) {
  if (n < 1) {
    return false
  }

  while(n > 1) {
    const mod = n % 2
    if (mod !== 0) {
      return false
    }

    n = n / 2
  }

  return true
}

console.log(isPowerOfTwo(4))