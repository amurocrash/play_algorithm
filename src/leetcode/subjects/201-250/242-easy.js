var isAnagram = function(s, t) {
  const length1 = s.length
  const length2 = t.length
  if (length1 !== length2) {
    return false
  }

  const smap = new Map()
  const tmap = new Map()
  for(let i = 0; i < length1; i++) {
    const ss = s[i]
    const ts = t[i]

    let scount = smap.get(ss)
    if (scount === undefined) {
      smap.set(ss, 1)
    } else {
      smap.set(ss, ++scount)
    }

    let tcount = tmap.get(ts)
    if (tcount === undefined) {
      tmap.set(ts, 1)
    } else {
      tmap.set(ts, ++tcount)
    }
  }

  if (smap.size !== tmap.size) {
    return false
  }

  for (const entry of smap) {
    const key = entry[0]
    const value = entry[1]
    if (tmap.get(key) !== value) {
      return false
    }
  }

  return true
}

const s = "rat"
const t = "car"

console.log(isAnagram(s, t))