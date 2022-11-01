var calPoints = function(operations) {
  let res = []
  operations.forEach(op => {
    const c = op
    if (c === 'C') {
      const length = res.length
      res.length = length - 1
    } else if (c === 'D') {
      const length = res.length
      res.push(res[length - 1] * 2)
    } else if (c === '+') {
      const length = res.length
      res.push(res[length - 1] + res[length - 2])
    } else {
      res.push(parseInt(c))
    }
  })

  return res.reduce((p, n) => p + n, 0)
}

// const ops = ["5","2","C","D","+"]
const ops = ["5","-2","4","C","D","9","+","+"]
console.log(calPoints(ops))