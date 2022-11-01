var isOneBitCharacter = function(bits) {
  let i = 0
  while(i < bits.length - 1) {
    const cur = bits[i]
    if (cur === 1) {
      i += 2
      if (i >= bits.length) { // 说明此时已经用完了数组的所有数据，包括最后一位0
        return false
      }
    } else {
      i += 1
    }
  }

  return true
}

const bits = [1, 1, 1, 0]
console.log(isOneBitCharacter(bits))