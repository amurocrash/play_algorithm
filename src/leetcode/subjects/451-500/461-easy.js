// 对两个数字进行异或运算，并统计结果为1的个数，那么这个数就是汉明距离。
var hammingDistance = function(x, y) {
  const c = x ^ y
  
  let count = 0
  for(let i = 0; i < 32; i++) {
    const r = (c >> i) & 1 // 右移一位取最后一位
    if (r === 1) {
      count++
    }
  }

  return count
}

console.log(hammingDistance(3, 1))