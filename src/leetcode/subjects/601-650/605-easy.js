function _cal(count, type) {
  if (type === 'all') {
    return Math.ceil(count / 2)
  } else if (type === 'head' || type === 'tail') {
    return Math.floor(count / 2)
  } else {
    return Math.floor((count - 1) / 2)
  }
  
}

var canPlaceFlowers = function(flowerbed, n) {
  let type = 'head'
  let curCount = 0
  let count = 0
  for(let i = 0; i < flowerbed.length; i++) {
    const cur = flowerbed[i]
    if (cur === 0) {
      curCount++
    } else {
      count += _cal(curCount, type)
      curCount = 0

      if (type === 'head') {
        type = 'center'
      }
    }
  }

  if (curCount > 0) {
    if (type === 'head') {
      type = 'all'
    } else if (type === 'center') {
      type = 'tail'
    }

    count += _cal(curCount, type)
  }

  return count >= n
}

const flowerbed = [1, 0, 0, 0, 0, 1]
console.log(canPlaceFlowers(flowerbed))

