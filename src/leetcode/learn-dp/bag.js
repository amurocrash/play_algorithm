// 背包问题
// w所有物品重量
// v所有物品的价值
// bearing背包能承受的最大重量

// 暴力递归
function bag(w, v, bearing) {
  return _select(w, v, 0, bearing)
}

function _select(w, v, index, bearing) {
  if (bearing < 0) { // 现实中可能会有重量 === 0 但却有价值的物品可存放
    return -1
  }

  if (index === w.length) {
    return 0
  }

  let r1 = _select(w, v, index + 1, bearing) // 不选当前的 直接跳过
  
  const curV = v[index]
  const remainder = bearing - w[index]
  let r2 = 0
  const next = _select(w, v, index + 1, remainder) // 选当前的，但如果next为-1，说明当前背包是无法放下现在的weight的
  if(next !== -1) {
    r2 = curV + next
  }

  return Math.max(r1, r2)
}


// 递归 + Dp
function bagDp(w, v, bearing) {
  const N = w.length
  const dp = new Array(N).fill(0).map(() => new Array(bearing + 1).fill(-1))
  return _selectDp(w, v, 0, bearing, dp)
}

function _selectDp(w, v, index, rest, dp) {
  if (rest < 0) {
    return -1
  }

  if (index === w.length) {
    return 0
  }

  if (dp[index][rest] !== -1) {
    return dp[index][rest]
  }

  let r1 = _selectDp(w, v, index + 1, rest, dp) // 不选index

  let r2 = 0
  let next = _selectDp(w, v, index + 1, rest - w[index], dp)
  if (next !== -1) {
    r2 = v[index] + next
  }

  const r = Math.max(r1, r2)
  dp[index][rest] = r
  return r
}


// Dp
function bagDpPro(w, v, bearing) {
  const N = w.length
  const dp = new Array(N + 1).fill(0).map(() => new Array(bearing + 1).fill(0))

  for(let index = N - 1; index >= 0; index--) {
    for(let rest = 0; rest <= bearing; rest++) {
      const r1 = dp[index + 1][rest]
      
      let r2 = 0 
      const remainder = rest - w[index]
      if (remainder >= 0) {
        r2 = v[index] + dp[index + 1][remainder]
      }

      dp[index][rest] = Math.max(r1, r2)
    }
  }

  return dp[0][bearing]
}
 
const w = [3, 2, 4, 7]
const v = [5, 6, 3, 19]
const bearing = 11
console.log(bag(w, v, bearing))
console.log(bagDp(w, v, bearing))
console.log(bagDpPro(w, v, bearing))