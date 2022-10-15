function _getSumOfDigits(num) {
  let sum = 0

  while(num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }

  return sum
}

var addDigits = function(num) {
  let sum
  while(true) {
    sum = _getSumOfDigits(num)
    
    if (sum < 10) {
      return sum
    }

    num = sum
  }
}

const num = 38
console.log(addDigits(num))