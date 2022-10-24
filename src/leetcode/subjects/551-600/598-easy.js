// var maxCount = function(m, n, ops) {
//   const matrix = []
//   for(let i = 0; i < m; i++) {
//     const cur = []
//     for(let j = 0; j < n; j++) {
//       cur.push(0)
//     }
//     matrix.push(cur)
//   }

//   ops.forEach(op => {
//     if (op.length > 0) {
//       const [i, j] = op
//       for()
//     }
//   })
// }

// var maxCount = function(m, n, ops) {
//   if (ops.length === 0) {
//     return m * n
//   }

//   const cur = ops[0]
//   for(let i = 1; i < ops.length; i++) {
//     const op = ops[i]
//     const [x0, y0] = cur
//     const [x1, y1] = op
//     cur[0] = Math.min(x0, x1)
//     cur[1] = Math.min(y0, y1)
//   }

//   return cur[0] * cur[1]
// }

var maxCount = function(m, n, ops) {
  if (ops.length === 0) {
    return m * n
  }

  let min1 = ops[0][0]
  let min2 = ops[0][1]
  
  for(let i = 1; i < ops.length; i++) {
    const [newMin1, newMin2] = ops[i]
    if (newMin1 < min1) {
      min1 = newMin1
    }

    if (newMin2 < min2) {
      min2 = newMin2
    }
  }

  return min1 * min2
}

const c = maxCount(18, 3, [[16,1],[14,3],[14,2],[4,1],[10,1],[11,1],[8,3],[16,2],[13,1],[8,3],[2,2],[9,1],[3,1],[2,2],[6,3]])
console.log(c)