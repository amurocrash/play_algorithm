function str2map(str) {
  const map = new Map()
  for (let i = 0;i < str.length;i++) {
    const s = str[i]
    let count = map.get(s)
    if (count === undefined) {
      map.set(s, 1)
    } else {
      map.set(s, ++count)
    }
  }

  return map
}

var canConstruct = function(ransomNote, magazine) {
  const magMap = str2map(magazine)
  const ranMap = str2map(ransomNote)

  for(const entry of ranMap) {
    const [key, value] = entry
    const _value = magMap.get(key)
    if (_value === undefined || _value < value) {
      return false
    }
  }

  return true
}