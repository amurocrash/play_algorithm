// 题目
// 规定1对应A，2对应B，3对应C
// 那么111就可以转化为AAA, KA, AK
// 给定一个只有数字字符组成的str，返回有多少种转化效果

// 暴力递归
function number2Letter(str) {
  const arr = str.split('')

  return _transfer(arr, 0)
}

function _transfer(arr, index) {
  if (index === arr.length) {
    return 1
  }

  if (arr[index] === '0') { // 0无法对应任何英文字符，说明前面做的决策是不可用的，当次尝试不计数
    return 0
  }

  // 当前字符单转
  let ways = _transfer(arr, index + 1)

  // 和i+1的位置一起转，需先判断是否可转
  if ((index + 1 < arr.length) && (((arr[index] - '0') * 10 + (arr[index + 1] - '0')) < 27)) {
    ways += _transfer(arr, index + 2)
  }

  return ways
}

// Dp
function number2LetterDp(str) {
  const N = str.length

  const dp = new Array(N + 1).fill(0)
  dp[N] = 1
  for(let index = N - 1; index >= 0; index--) {
    const s = arr[index]
    if (s === '0') {
      continue
    }

    let ways = dp[index + 1]

    if ((index + 1 < N) && ((s - '0') * 10 + (s - '0')) < 27) {
      ways += dp[index + 2]
    }

    dp[index] = ways
  }

  return dp[0]
}

// const str = '11111'
const str = '1101111111011101'
console.log(number2Letter(str))
console.log(number2Letter(str))