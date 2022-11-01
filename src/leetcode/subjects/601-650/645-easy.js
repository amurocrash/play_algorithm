var findErrorNums = function(nums) {
  const res = []
  const map = new Map()
  nums.forEach(n => {
    let count = map.get(n)
    if (count === undefined) {
      map.set(n, 1)
    } else {
      res[0] = n
      map.set(n, count + 1)
    }
  })

  const max = nums.length
  for(let i = 1; i <= max; i++) {
    if (!map.has(i)) {
      res[1] = i
      break
    }
  }

  return res
}

// const nums = [3,2,3,4,6,5]
const nums = [1,5,3,2,2,7,6,4,8,9]
console.log(findErrorNums(nums))