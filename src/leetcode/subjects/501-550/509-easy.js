// var fib = function(n) {
//   if (n === 0) {
//     return 0
//   } else if (n === 1) {
//     return 1
//   } else {
//     return fib(n - 1) + fib(n - 2)
//   }
// }

var fib = function(n) {
  let last1 = 0
  let last2 = 0
  for(let i = 1; i <= n ; i++){
    if (i === 1) {
      last2 = 1
    } else {
      let temp = last2
      last2 = last2 + last1
      last1 = temp
    }
  }

  return last2
}