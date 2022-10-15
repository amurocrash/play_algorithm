var firstUniqChar = function(s) {
  const map = new Map()

  for(let i = 0; i < s.length; i++) {
    const c = s[i]
    let holder = map.get(c)
    if (!holder) {
      map.set(c, {
        index: i,
        count: 1
      })
    } else {
      holder.count++
    }
  }

  for(const entry of map) {
    const holder = entry[1]
    if (holder.count === 1) {
      return holder.index
    }
  }

  return -1
}

// const s = 'aabb'
// console.log(firstUniqChar(s))


const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const map = new Map()
arr.forEach(e => {
  map.set(e, null)
})
for(const entry of map) {
  console.log(entry[0] + ', ')
}