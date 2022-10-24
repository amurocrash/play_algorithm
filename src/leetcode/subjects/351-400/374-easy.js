function guess(num) {
  const pick = 6
  if (num === pick) {
    return 0
  } else if (num > pick) {
    return -1
  } else {
    return 1
  }
}

var guessNumber = function(n) {
  let l = 1
  let r = n

  while(l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    const res = guess(mid)
    if (res === 0) {
      return mid
    } else if (res === -1) { // mid > pick 去左边找
      r = mid - 1
    } else { // mid < pick
      l = mid + 1 
    }
  }
}

const n = 10
console.log(guessNumber(n))