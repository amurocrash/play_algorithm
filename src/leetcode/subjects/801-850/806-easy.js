const LINE_WIDTH = 100

var numberOfLines = function(widths, s) {
  let lines = 0

  let curLineWidth = 0
  
  let i = 0
  while(i < s.length) {
    const c = s[i].charCodeAt() - 97
    const curWidth = widths[c]
    let sum = curLineWidth + curWidth
    if (sum < LINE_WIDTH) {
      i++
      curLineWidth = sum
    } else if (sum === LINE_WIDTH) {
      if (i !== s.length - 1) {
        lines++
        curLineWidth = 0
      } else {
        curLineWidth = sum
      }

      i++
    } else {
      lines++
      curLineWidth = 0
    }
  }

  if (curLineWidth > 0) {
    lines++
  }

  return [lines, curLineWidth]
}

// const widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
// const S = "abcdefghijklmnopqrstuvwxyz"

// const widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
// const S = "bbbcccdddaaa"

const widths = [3,4,10,4,8,7,3,3,4,9,8,2,9,6,2,8,4,9,9,10,2,4,9,10,8,2]
const S = "mqblbtpvicqhbrejb"

console.log(numberOfLines(widths, S))




