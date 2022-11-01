// var nextGreatestLetter = function(letters, target) {

//   let c = target.charCodeAt()
//   for(let i = 0; i < letters.length; i++) {
//     const cur = letters[i].charCodeAt()
//     if (cur > c) {
//       return String.fromCharCode(cur)
//     }
//   }

//   return letters[0]
// }

// var nextGreatestLetter = function(letters, target) {
//   let c = target.charCodeAt()
//   let l = 0
//   let r = letters.length - 1

//   while(l < r) {
//     const mid = l + Math.floor((r - l) / 2)
//     const cur = letters[mid].charCodeAt()
    
//     if (cur > c) {
//       const prev = letters[mid - 1] === undefined ? undefined : letters[mid - 1].charCodeAt()
//       if (prev === undefined || prev <= c) {
//         return String.fromCharCode(cur)
//       } else {
//         r -= 2
//       }
//     } else { // cur <= c
//       const next = letters[mid + 1] === undefined ? undefined : letters[mid + 1].charCodeAt()
//       if (next > c) {
//         return String.fromCharCode(next)
//       } else if (next <= c) {
//         l += 2
//       }
//     }

//   }

//   return letters[0]

// }

var nextGreatestLetter = function(letters, target) {
  // let c = target.charCodeAt()
  if (target >= letters[letters.length - 1]) {
    return letters[0]
  }

  let l = 0
  let r = letters.length - 1

  while(l < r) {
    const mid = l + Math.floor((r - l) / 2)
    const cur = letters[mid]
    if (cur > target) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return letters[r]
}

const letters = ["c", "f", "j"], target = "j"
// const letters = ["x","x","y","y"], target = 'z'
console.log(nextGreatestLetter(letters, target))