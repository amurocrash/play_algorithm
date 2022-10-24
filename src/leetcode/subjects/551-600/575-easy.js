var distributeCandies = function(candyType) {
  const n = candyType.length / 2
  const set = new Set()
  candyType.forEach(type => {
    set.add(type)
  })

  const types = set.size
  return Math.min(n, types)
}