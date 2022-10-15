const HEX_CODE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

var toHex = function(num) {
  if (num === 0) {
    return '0'
  }

  let str = ''
  for (let i = 7; i >= 0; i--) {
    const e = (num >> 4 * i) & 0xf // 右移28位，剩下的就是最高4位，0xf = 0....0ffff，相当于只保留最后四位的值，前面的全部变成0
    if (str.length > 0 || e > 0) {
      str += HEX_CODE[e]
    }
  }

  return str
}

// console.log(toHex(26))

const n = 16
for (let i = 7; i >= 0; i--) {
  const e = (n >> 4 * i) & 0xf
  console.log(e.toString(2))
}
