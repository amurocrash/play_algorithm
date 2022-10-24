var convertToBase7 = function(num) {
  let isNegative = false
  if (num < 0) {
    num = -num
    isNegative = true
  }

  let str = ''

  while(num >= 0) {
    const c = num % 7
    str = c + str
    num = Math.floor(num / 7)
    if (num === 0) {
      break
    }
  }

  return isNegative ? '-' + str : str
}

const num = 0
console.log(convertToBase7(num))