var matrixReshape = function(mat, r, c) {
  const r_ = mat.length
  const c_ = mat[0].length

  if (r * c !== r_ * c_) {
    return mat
  }

  const res = []
  let temp = []
  for(let i = 0; i < r_; i++) {
    for(let j = 0; j < c_; j++) {
      const cur = mat[i][j]
      temp.push(cur)
      if (temp.length === c) {
        res.push(temp)
        temp = []
      }
    }
  }

  return res
}

const mat = [[1,2], [3,4], [5, 6]], r = 2, c = 3
console.log(matrixReshape(mat, r, c))