const { swap, defaultSort, getRandomIndex } = require('../../utils')

const bubbleSort = (arr, asc = true, sort = defaultSort) => {
  const newArr = [...arr]

  if (arr.length <= 1) {
    return newArr
  }
  
  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
      if (sort(newArr[j], newArr[j + 1], asc)) {
        swap(newArr, j, j + 1)
      }
    }
  }

  return newArr
}

const selectionSort = (arr, asc = true, sort = defaultSort) => {
  const newArr = [...arr]

  if (arr.length <= 1) {
    return newArr
  }

  for(let i = 0; i < newArr.length - 1; i++) {
    let temp = newArr[i]
    let tempIndex = i
    for (let j = i + 1; j < newArr.length; j++) {
      if ((asc && newArr[j] < temp) || (!asc && newArr[j] > temp)) {
        temp = newArr[j]
        tempIndex = j
      }
    }

    if ((asc && temp < newArr[i]) || (!asc && temp > newArr[i])) {
      swap(newArr, tempIndex, i)
    } 
  }

  return newArr
}

const insertSort = (arr, asc = true) => {
  const newArr = [...arr]

  if (arr.length <= 1) {
    return newArr
  }

  for (let i = 1; i < newArr.length; i++) {
    const temp = newArr[i]
    let tempIndex = i
    for (j = i - 1; j >= 0; j--) {
      if ((asc && temp < newArr[j]) || (!asc && temp > newArr[j])) {
        swap(newArr, j, tempIndex) // 性能较差 swap是内存操作
        tempIndex = j
      } else {
        break
      }
    }
  }

  return newArr
}

const insertSortPro = (arr, asc = true) => {
  const newArr = [...arr]

  for (let i = 1; i < newArr.length; i++) {
    const temp = newArr[i]
    let tempIndex = i
    for (let j = i - 1; j >= 0 ; j--) {
      if ((asc && temp < newArr[j]) || (!asc && temp > newArr[j])) {
        newArr[tempIndex] = newArr[j]
        tempIndex = j
      } else {
        break
      }
    }

    newArr[tempIndex] = temp
  }

  return newArr
}

const insertSortProX = (arr, l = 0, r = arr.length, asc = true) => {
  for (let i = l + 1; i <= r; i++) {
    const temp = arr[i]
    let tempIndex = i
    for (let j = i - 1; j >= l; j--) {
      if ((asc && temp < arr[j]) || (!asc && temp > arr[j])) {
        arr[tempIndex] = arr[j]
        tempIndex--
      } else {
        break
      }
    }

    arr[tempIndex] = temp
  }
}

const mergeSort = (arr, asc = true) => {
  const newArr = [...arr]

  const __merge = (arr, l, mid, r) => {
    const temp = []
    for (let i = l; i <= r; i++) {
      temp[i - l] = arr[i] // -l是为了在l > 0的时候 让temp数组的下标从0开始 但对js来说数组下标可以不从0开始 -l不加也可以
    }

    let i = l
    let j = mid + 1
    for(let k = l; k <= r; k++) {
      if (i > mid) {
        arr[k] = temp[j - l]
        j++
      } else if (j > r) {
        arr[k] = temp[i - l]
        i++
      } else if ((asc && temp[i - l] < temp[j - l]) || (!asc && temp[i - l] > temp[j - l])) {
        arr[k] = temp[i - l]
        i++
      } else {
        arr[k] = temp[j - l]
        j++
      }
    }
  }

  const __sort = (arr, l, r) => {
    // if (l >= r) {
    //   return
    // }

    if (r - l <= 15) {
      insertSortProX(arr, l, r, asc)
      return
    }

    const mid = Math.floor((l + r) / 2)
    __sort(arr, l, mid)
    __sort(arr, mid + 1, r)
    if ((asc && arr[mid] > arr[mid + 1]) || (!asc && arr[mid] < arr[mid + 1])) {
      __merge(arr, l, mid, r)
    }
  }
  
  __sort(newArr, 0, arr.length - 1)

  return newArr
}

const quickSort = (arr, asc = true) => {
  const newArr = [...arr]

  const __partition = (arr, l, r) => {

    swap(arr, l, getRandomIndex(l, r)) // 更换头元素和数组中随机一个元素，防止近乎有序的情况下劣化成n^2

    const pValue = arr[l]
    let j = l // j + 1就是第一个比pValue大的索引
    for(let i = l + 1; i <= r; i++) {
      const e = arr[i]
      if (asc && e < pValue || !asc && e > pValue) {
        swap(arr, j + 1, i)
        j++
      }
    }
    swap(arr, j, l)
    return j
  }

  const __sort = (arr, l, r) => {
    if (r - l <= 15) {
      insertSortProX(arr, l, r, asc)
      return
    }

    const p = __partition(arr, l, r)
    __sort(arr, l, p - 1)
    __sort(arr, p + 1, r)
  }

  __sort(newArr, 0, arr.length - 1)

  return newArr
}

/**
 * quick sort 3ways
 * [v, <v, ===v, >v]
 */
const sort = (arr, asc = true, sort = defaultSort,) => {
  const newArr = [...arr]
  const __partition = (arr, l, r) => {
    swap(arr, l, getRandomIndex(l, r))

    const v = arr[l]
    let i = l + 1
    let lt = l
    let gt = r + 1
    while (i < gt) {
      const e = arr[i]
      if ((asc && e < v) || (!asc && e > v)) {
        swap(arr, lt + 1, i)
        lt++
        i++
      } else if (e === v) {
        i++
      } else {
        swap(arr, gt - 1, i)
        gt--
      }
    }

    swap(arr, l, lt)

    return {
      lt: lt - 1, gt
    }
  }

  const __sort = (arr, l, r) => {
    if (r - l <= 15) {
      insertSortProX(arr, l, r)
      return
    }

    const { lt, gt } = __partition(arr, l, r)
    __sort(arr, l, lt)
    __sort(arr, gt, r)
  }

  __sort(newArr, 0, newArr.length - 1)
  return newArr
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertSort,
  insertSortPro,
  mergeSort,
  quickSort,
  sort,
}
