const { sort } = require('../sort/index')

// 9 / 2 = 4, 4 / 2 = 2, 2 / 2 = 0 5 + 9 / 2 = 7
const binarySearch = (arr, target) => {
  
  const __search = (arr, l, r) => {
    if (l > r) {
      return
    }

    const mid = Math.floor((l + r) / 2) // l + Math.floor((r - l) / 2)
    const v = arr[mid]
    if (v === target) {
      return mid
    } else if (target > v) {
      return __search(arr, mid + 1, r)
    } else {
      return __search(arr, l, mid - 1)
    }
  }

  const sorted = sort(arr)

  return __search(sorted, 0, arr.length - 1)
}

module.exports = {
  binarySearch
}