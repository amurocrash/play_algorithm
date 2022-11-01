function isSelfDividing(n) {
  let origin = n
  while(n > 0) {
    const cur = n % 10
    if (origin % cur !== 0) {
      return false
    }
    n = Math.floor(n / 10)
  }

  return true
}

var selfDividingNumbers = function(left, right) {
  const res = []
  for(let i = left; i <= right; i++) {
    if(isSelfDividing(i)) {
      res.push(i)
    }
  }

  return res
}

const left = 1, right = 22
console.log(selfDividingNumbers(left, right))