var countPrimeSetBits = function(left, right) {
  let res = 0
  for(let i = left; i <= right; i++) {
    const count = count1ForBits(i)
    if (isPrime(count)) {
      res++
    }
  }

  return res
}

function count1ForBits(num) {
  let count = 0
  for(let i = 0; i < 32; i++) {
    let cur = num >> i & 0x00000001
    if (cur === 1) {
      count++
    }
  }

  return count
}

function isPrime(num) {
  if (num < 2) {
    return false
  }

  for(let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

const left = 6, right = 10
console.log(countPrimeSetBits(left, right))