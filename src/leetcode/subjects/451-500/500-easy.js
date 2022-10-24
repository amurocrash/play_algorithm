const line1 = "qwertyuiop"
const line2 = "asdfghjkl"
const line3 = "zxcvbnm"

var findWords = function(words) {
  const res = []

  words.forEach(word => {
    let r1 = true
    let r2 = true
    let r3 = true
    for(let i = 0; i < word.length; i++) {
      const c = word[i].toLowerCase()
      if(r1 && !line1.includes(c)) {
        r1 = false
      }

      if(r2 && !line2.includes(c)) {
        r2 = false
      }

      if (r3 && !line3.includes(c)) {
        r3 = false
      }
    }

    if (r1 || r2 || r3) {
      res.push(word)
    }
  })

  return res
}

const words = ["Hello", "Alaska", "Dad", "Peace"]
console.log(findWords(words))