const defaultSort = (a, b, asc = true) => {
  if (asc) {
    return a > b
  } else {
    return a < b
  }
}

function generateArr(length = 10) {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(Math.round(Math.random() * length * 10))
  }

  return arr
}

function validateSortedArr(arr, asc = true, sort = defaultSort) {
  if (arr.length <= 1) {
    return true
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (sort(arr[i], arr[i + 1], asc)) {
      return false
    }
  }

  return true
}

const swap = (arr, x, y) => {
  if (x === y) {
    return
  }

  const temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp
}

const getRandomIndex = (l, r) => {
  if (l > r) {
    throw new Error('l > r is error')
  }

  if (l === r) {
    return l
  }

  return Math.round(Math.random() * (r - l) + l)
}

/**
 * 
 * @param {*} s 
 * @param {*} type letter, upper, lower
 * @returns 
 */
const isLetter = (s, type = 'letter') => {
  const c = s.charCodeAt()

  if (type === 'letter') {
    return (c >= 65 && c <= 90) || (c >= 97 && c <= 122)
  } else if (type === 'upper') {
    return c >= 65 && c <= 90
  } else if (type === 'lower') {
    return c >= 97 && c <= 122
  }
}

const isNumber = (s) => {
  const c = s.charCodeAt()
  return c >= 48 && c <= 57
}

function toNumber(s) {
  const c = s.charCodeAt()
  return c - 48
}

/**
 * 计算数组元素的全排列
 * @param {*} data 数组
 * @param {*} from 从数组哪个元素开始
 * @param {*} to 到数组哪个元素结束
 * @param {*} selected 选几个元素排列（就是C42中的2）
 * @returns 返回二维数组，第二维的每个数组为一种排列的情况
 */
function calFullPermutation(data, from, to, selected) {
  if (selected === 0) {
    return []
  }

  if (selected === 1) {
    const res = []
    for(let i = from; i <= to; i++) {
      res.push([data[i]])
    }
    return res
  }

  const res = []
  while(from <= to - selected + 1) { // [0, 1, 2, 3]，sel=2时，不管哪次循环，最多只需要走到from = 2，也就是to - sel + 1的位置，因为走到3后面就没有元素可以排列了
    const arr = calFullPermutation(data, from + 1, to, selected - 1) // 递归，当前元素对应的全排列，等于除去当前元素剩下的元素的全排列加上当前元素
    arr.forEach(eArr => {
      res.push([data[from], ...eArr])
    })
    from++
  }
  
  return res
}

module.exports = {
  defaultSort,
  generateArr,
  validateSortedArr,
  swap,
  getRandomIndex,
  isLetter,
  isNumber,
  toNumber,
  calFullPermutation
}