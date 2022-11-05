var shortestCompletingWord = function(licensePlate, words) {
  const mapLp = new Map()
  for(let i = 0; i < licensePlate.length; i++) {
    const s = licensePlate[i].toLowerCase()

    const c = s.charCodeAt()
    if (c >= 97 && c <= 122) {
      let count = mapLp.get(s)
      if (count === undefined) {
        mapLp.set(s, 1)
      } else {
        mapLp.set(s, count + 1)
      }
    }
  }

  let maxfoundCount
  let minLength
  let minWord
  for(let index = 0; index < words.length; index++) {
    const word = words[index]

    const map = new Map()
    for(let i = 0; i < word.length; i++) {
      const s = word[i].toLowerCase()
      const c = s.charCodeAt()
      if (c >= 97 && c <= 122) {
        let count = map.get(s)
        if (count === undefined) {
          map.set(s, 1)
        } else {
          map.set(s, count + 1)
        }
      }
    }

    let foundCount = 0
    for(const entry of mapLp) {
      const [s, count] = entry
      
      const curCount = map.get(s) || 0
      foundCount += Math.min(curCount, count)
    }

    if (foundCount > 0 && 
      (maxfoundCount === undefined || 
        foundCount > maxfoundCount || 
        (foundCount === maxfoundCount 
          && (minLength === undefined || word.length < minLength)))) {
      maxfoundCount = foundCount
      minLength = word.length
      minWord = word
    }
    
  }

  return minWord
}

// const licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
// const licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
const licensePlate = "GrC8950", words = ["measure","other","every","base","according","level","meeting","none","marriage","rest"]
console.log(shortestCompletingWord(licensePlate, words))