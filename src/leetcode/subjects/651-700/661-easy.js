function cal(img, i, j) {
  let sum = 0
  let count = 0
  for(let m = i - 1; m <= i + 1; m++) {
    for(let n = j - 1; n <= j + 1; n++) {
      let cur = img[m] === undefined ? undefined : img[m][n]
      if (cur !== undefined) {
        sum += cur
        count++
      }
    }
  }

  return Math.floor(sum / count) 
}

var imageSmoother = function(img) {
  const row = img.length
  const col = img[0].length

  const res = []

  for(let i = 0; i < row; i++) {
    res[i] = []
    for(let j = 0; j < col; j++) {
      res[i][j] = cal(img, i, j)
    }
  }

  return res
}

const img = [[100,200,100],[200,50,200],[100,200,100]] // [[137,141,137],[141,138,141],[137,141,137]]
console.log(imageSmoother(img))