

var findContentChildren = function(g, s) {
  let count = 0

  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  let is = 0
  let ig = 0

  while(is < s.length && ig < g.length) {
    const cur_s = s[is]
    const cur_g = g[ig]

    if (cur_s >= cur_g) {
      count++
      is++
      ig++
    } else {
      is++
    }
  }

  return count
}

const g = [10, 9, 8, 7]
const s = [5, 6, 7, 8]
console.log(findContentChildren(g, s))