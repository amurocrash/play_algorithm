function str2Arr(str) {
  const res = []
  let curWord = ''
  for(let i = 0; i < str.length; i++) {
    const s = str[i]
    const c = s.charCodeAt()
    if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) {
      curWord += s
    } else {
      if (curWord.length > 0) {
        res.push(curWord)
        curWord = ''
      }
    }
  }

  if (curWord.length > 0) {
    res.push(curWord)
  }

  return res
}

var mostCommonWord = function(paragraph, banned) {
  const map = new Map()

  const paraArr = str2Arr(paragraph)
  paraArr.forEach(_word => {
    const word = _word.toLowerCase()
    if (banned.indexOf(word) === -1) {
      let count = map.get(word)
      if (count === undefined) {
        map.set(word, 1)
      } else {
        map.set(word, count + 1)
      }
    }
  })

  let res = ''
  let maxCount = 0
  for(const entry of map) {
    const [word, count] = entry
    if (count > maxCount) {
      res = word
      maxCount = count
    }
  }

  return res
}

const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
console.log(mostCommonWord(paragraph, banned))