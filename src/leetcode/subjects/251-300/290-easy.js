var wordPattern = function(pattern, s) {
  let length1 = pattern.length
  const sArr = s.split(' ')
  let length2 = sArr.length
  if (length1 !== length2) {
    return false
  }

  const map = new Map()

  for(let i = 0; i < length1; i++) {
    const p_ = pattern[i]
    const s_ = sArr[i]

    const sCahce = map.get(p_)
    if (sCahce === undefined) {
      for (const v of map.values()) {
        if (s_ === v) {
          return false // 在加入新的key-value时先确认其他key是否已经用了这个value，如果有则直接返回false
        }
      }
      map.set(p_, s_)
    } else if (sCahce !== s_) {
      return false // 说明同一个key对应的是不同的value
    }
  }

  return true
}

const pattern = "abba"
const s = "dog cat cat dog"
console.log(wordPattern(pattern, s))