// 1
// 10
// 11
// 100
// 101
// 110
// 111
// 1000
// 1001
// 1010
// 1011

// 6 % 2 = 0
// 3 % 2 = 1
// 1 % 2 = 1

var reverseBits = function(n) {
  let temp = []
  while(n > 0) {
    const c = n % 2
    temp.push(c)
    n = Math.floor(n / 2)
  } // 10转2，注意这时候res就是n的二进制反转后的结果

  let res = 0
  const length = temp.length
  if (length < 32) {
    for (let i = 0; i < 32 - length; i++) {
      temp.push(0)
    }
  } // 补充前面的0，比如1经过上面10转2后二进制依然1，但前面实际有0000....00001(共31位0)，反转后就是10000....0000

  for (let i = 0; i < 32; i++) {
    res += temp[i] * Math.pow(2, 31 - i)
  } // 2转10

  return res
}


// const n = 00000010100101000001111010011100
// 00111001011110000010100101
// 00111001011110000010100101
// 00111001011110000010100101000000
// 00111001011110000010100101000000
const n = 43261596
const res = reverseBits(n)
console.log(res)
