var hammingWeight = function(n) {
  let count = 0
  while (n > 0) {
    const c = n % 2
    if (c === 1) {
      count++
    }
    n = Math.floor(n / 2)
  }

  return count
}

const n = 11
const c = hammingWeight(n)
console.log(c)

