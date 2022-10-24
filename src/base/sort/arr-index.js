function swap(arr, x, y) {
  if (x === y) {
    return
  }

  const temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp
}

function partition(arr, indexes, l, r) {
  const v = arr[indexes[l]]
  let i = l
  let j = r + 1
  let k

  let cur = l + 1
  while(i < j && (k === undefined || k < j) && cur <= r) {
    const e = arr[indexes[cur]]
    if (e > v) {
      swap(indexes, i + 1, cur)
      i++
      if (k !== undefined) {
        k++
      }
    } else if (e === v) {
      k = cur
    } else {
      swap(indexes, j - 1, cur)
      j--
    }

    cur++
  }

  swap(indexes, i, l)

  return {
    lp: i - 1,
    rp: j
  }
}

function _quickSort(arr, indexes, l, r) {
  if (l > r) {
    return
  }

  const { lp, rp } = partition(arr, indexes, l, r)
  _quickSort(arr, indexes, l, lp)
  _quickSort(arr, indexes, rp, r)
}

function quickSort(arr) {
  const indexes = []
  arr.forEach((_, index) => indexes.push(index))
  _quickSort(arr, indexes, 0, arr.length - 1)
  return indexes
}