var numJewelsInStones = function(jewels, stones) {
  const _stones = stones.split('')
  const _jewels = jewels.split('')

  let count = 0
  _stones.forEach(s => {
    if (_jewels.indexOf(s) !== -1) {
      count++
    }
  })

  return count
}

const jewels = "aA", stones = "aAAbbbb"
console.log(numJewelsInStones(jewels, stones))