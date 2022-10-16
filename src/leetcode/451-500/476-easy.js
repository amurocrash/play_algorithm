// var findComplement = function(num) {
//   let count = 0
//   let res = 0
//   while(num > 0) {
//     const c = num % 2
//     if (c === 0) {
//       res += Math.pow(2, count)
//     }

//     count++
//     num = Math.floor(num / 2)
//   }

//   return res
// }

var findComplement = function(num) {
  let max = 31
  for(let i = 0; i < 32; i++) {
    const temp = (num << i) & 0x80000000 // 先通过左移找到第一个1所在的位置
    if (temp < 0) { // 小于0是因为此时首位是1，后面都是0，首位是符号位，1代表负数
      max = i
      break
    }
  }

  let res = 0
  for(let i = 0; i < 32 - max; i++) { // 再通过右移把每个指定位数的值取反相加得到结果
    const temp = (num >> i) & 1
    if (temp === 0) {
      res += Math.pow(2, i)
    }
  }

  return res
}


console.log(findComplement(6))