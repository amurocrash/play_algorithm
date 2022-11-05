const MORSE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

function word2Morse(word) {
  let morse = ''

  for(let i = 0; i < word.length; i++) {
    const s = word[i]
    morse += MORSE[s.charCodeAt() - 97]
  }

  return morse
}

var uniqueMorseRepresentations = function(words) {
  const set = new Set()
  words.forEach(word => {
    let curMorse = word2Morse(word)
    if (!set.has(curMorse)) {
      set.add(curMorse)
    }
  })

  return set.size
}

const words = ["gin", "zen", "gig", "msg"]
console.log(uniqueMorseRepresentations(words))