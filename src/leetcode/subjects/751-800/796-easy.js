// var rotateString = function(s, goal) {
//   if (s === goal) {
//     return true
//   }

//   const arr = s.split('')
//   for(let i = 0; i < s.length; i++) {
//     arr.push(arr.shift())
//     const newS = arr.join('')
//     if (newS === goal) {
//       return true
//     }
//   }

//   return false
// }

// s + s 包含了s旋转后的所有可能
var rotateString = function(s, goal) {
  return s.length === goal.length && (s + s).indexOf(goal) !== -1
}
