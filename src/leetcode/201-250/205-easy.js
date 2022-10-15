var isIsomorphic = function(s, t) {
  const maps = new Map()
  const mapt = new Map()

  for(let i = 0; i < s.length; i++) {
    const sCur = s[i]
    const tCur = t[i]

    const s_t = maps.get(sCur)
    const t_s = mapt.get(tCur)

    if (!s_t && !t_s) {
      maps.set(sCur, tCur)
      mapt.set(tCur, sCur)
    } else if (s_t && t_s) {
      if (tCur !== s_t || sCur !== t_s) {
        return false
      }
    } else {
      return false
    }
  }

  return true
}

const s = 'paper'
const t = 'title'
const r = isIsomorphic(s, t)
console.log(r)