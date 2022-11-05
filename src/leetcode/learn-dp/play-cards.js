// 题目
// 给定一个整型数组arr，代表数值不同的纸牌排成一条线，
// 玩家A和玩家B依次拿走每张纸牌，规定玩家A先拿，玩家B后拿
// 但是每次只能拿走最左或最右的纸牌
// 假设玩家都绝顶聪明做最优选择，返回最后获胜者的分数

// 暴力递归
function playCards(arr) {
  if (!arr || arr.length === 0) {
    return 0
  }

  return Math.max(_playF(arr, 0, arr.length - 1), _playG(arr, 0, arr.length - 1))
}

// 先手
function _playF(arr, l, r) {
  if (l === r) {
    return arr[l]
  }

  return Math.max(arr[l] + _playG(arr, l + 1, r), arr[r] + _playG(arr, l, r - 1))
}

// 后手
function _playG(arr, l, r) {
  if (l === r) {
    return 0
  }

  return Math.min(_playF(arr, l + 1, r), _playF(arr, l, r - 1))
}


// 递归加缓存
function playCardsDp(arr) {
  if (!arr || arr.length === 0) {
    return 0
  }

  const N = arr.length
  const fdp = new Array(N).fill(0).map(() => new Array(N).fill(-1))
  const gdp = new Array(N).fill(0).map(() => new Array(N).fill(-1))

  return Math.max(_playFDp(arr, 0, N - 1, fdp, gdp), _paylGDp(arr, 0, N - 1, fdp, gdp))
}

function _playFDp(arr, l, r, fdp, gdp) {
  if (fdp[l][r] !== -1) {
    return fdp[l][r]
  }

  let res
  if (l === r) {
    res = arr[l]
  } else {
    res = Math.max(arr[l] + _paylGDp(arr, l + 1, r, fdp, gdp), arr[r] + _paylGDp(arr, l, r - 1, fdp, gdp))
  }

  fdp[l][r] = res
  return res
}

function _paylGDp(arr, l, r, fdp, gdp) {
  if (gdp[l][r] !== -1) {
    return gdp[l][r]
  }

  let res
  if (l === r) {
    res = 0
  } else {
    res = Math.min(_playFDp(arr, l + 1, r, fdp, gdp), _playFDp(arr, l , r - 1, fdp, gdp))
  }

  gdp[l][r] = res
  return res
}


// 最终动态规划
function playCardsDpPro(arr) {
  if (!arr || arr.length === 0) {
    return 0
  }

  const N = arr.length
  const fdp = new Array(N).fill(0).map(() => new Array(N))
  const gdp = new Array(N).fill(0).map(() => new Array(N))

  for(let i = 0; i < N; i++) {
    fdp[i][i] = arr[i]
    gdp[i][i] = 0
  }

  let k = 1
  while(k < N) {
    let j = k
    for(let i = 0; i < N - k; i++) {
      fdp[i][j] = Math.max(arr[j] + gdp[i][j - 1], arr[i] + gdp[i + 1][j])
      gdp[i][j] = Math.min(fdp[i][j - 1], fdp[i + 1][j])
      j++
    }

    k++
  }

  return Math.max(fdp[0][N - 1], gdp[0][N - 1])
}

const arr = [5, 7, 4, 5, 8, 1, 6, 0, 3, 4, 6, 1, 7]
// const arr = [7, 4, 16, 15, 1]
console.log(playCardsDp(arr))
console.log(playCardsDpPro(arr))

