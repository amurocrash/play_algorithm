var solution = function(isBadVersion) {
  return function(n) {
    let l = 1
    let r = n

    // 因为版本的排列一定是false false false false true true true，所以false的时候一定是往后找，true的时候一定是往前找
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2)
      if (isBadVersion(mid)) {
        r = mid
      } else {
        l = mid + 1
      }
    }

    return l
  }
}

const isBadVersion = solution(4)
console.log(isBadVersion(3))
console.log(isBadVersion(4))
console.log(isBadVersion(5))