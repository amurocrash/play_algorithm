// 题目
// 假设一排有1-N个位置，N>=2，机器人开始在M位置，1 <= M <= N
// 当M = 1时，机器人只能向后移动，当M = N时，机器人只能向前移动，其他情况可往任意方向移动
// 求当要求机器人走K步，必须到达P点（1 <= P <= N）时的走法一共有多少种

// 暴力递归
function findWays(N, M, K, P) {
  return _find(N, M, K, P)
}

function _find(N, cur, rest, P) {
  if (rest === 0) {
    return cur === P ? 1 : 0
  }

  if (cur === 1) {
    return _find(N, cur + 1, rest - 1, P)
  }

  if (cur === N) {
    return _find(N, cur - 1, rest - 1, P)
  }

  return _find(N, cur - 1, rest - 1, P) + _find(N, cur + 1, rest - 1, P)
}

// 递归+缓存，只有M和K会变，针对变的部分提供缓存，注意N是1-N，数组下标从0开始，
function findWaysDp(N, M, K, P) {
  const dp = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(-1)) // dp[cur][rest] = -1
  return _findDp(N, M, K, P, dp)
}

function _findDp(N, cur, rest, P, dp) {
  if (dp[cur][rest] !== -1) {
    return dp[cur][rest]
  }

  let n = 0
  if (rest === 0) {
    n = (cur === P ? 1: 0)
  } else if (cur === 1) {
    n = _findDp(N, cur + 1, rest - 1, P, dp)
  } else if (cur === N) {
    n = _findDp(N, cur - 1, rest - 1, P, dp)
  } else {
    n = _findDp(N, cur + 1, rest - 1, P, dp) + _findDp(N, cur - 1, rest - 1, P, dp)
  }

  dp[cur][rest] = n
  return n
}


// 最终的DP
function findWaysDpPro(N, M, K, P) {
  const dp = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(0))
  dp[P][0] = 1 // rest === 0 && cur === P

  for(let k = 1; k <= K; k++) {
    for(let n = 1; n <= N; n++) {
      dp[n][k] = dp[n - 1][k - 1] + (dp[n + 1] === undefined ? 0 : dp[n + 1][k - 1])
    }
  }
  
  return dp[M][K] // start在M，步数在K的就是最终结果
}

// console.log(findWays(7, 4, 9, 5))
// console.log(findWaysDp(7, 4, 9, 5))
console.log(findWaysDpPro(7, 4, 9, 5))

// console.log(findWays(4, 2, 4, 4))
// console.log(findWaysDp(4, 2, 4, 4))
// console.log(findWaysDpPro(4, 2, 4, 4))