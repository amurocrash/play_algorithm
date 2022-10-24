// 1 + 2 + 3 + .... + n = (n + 1) * n / 2
// 列方程x(x + 1) / 2 >= m，求出x >= sqrt(2m + 0.25) - 0.5
var arrangeCoins = function(n) {
  const i = Math.ceil(Math.sqrt(2 * n + 0.25) - 0.5)

  const total = i * (i + 1) / 2
  const gap = total - n
  
  if (gap > 0) {
    return i - 1
  } else {
    return i
  }
}

console.log(arrangeCoins(6))