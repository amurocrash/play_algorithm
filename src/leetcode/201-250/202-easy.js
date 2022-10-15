function generateNext(n) {
  let next = 0
  while(n > 0) {
    const c = n % 10
    next += Math.pow(c, 2)
    n = Math.floor(n / 10)
  }

  return next
}

var isHappy = function(n) {
  const temp = new Set()

  while (true)  {
    if (n === 1) {
      return true
    }

    if (temp.has(n)) {
      return false
    }

    temp.add(n)
    n = generateNext(n)
  }

}

const n = 19
const r = isHappy(n)
console.log(r)