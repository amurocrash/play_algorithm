function contain(queue, coordinate) {
  return queue.find(cor => cor[0] === coordinate[0] && cor[1] === coordinate[1]) !== undefined
}

var isToeplitzMatrix = function(matrix) {
  const col = matrix.length - 1
  const row = matrix[0].length - 1

  const start = [0, col] // x = 0, y = 2
  const queue = []
  queue.push(start)
  while(queue.length > 0) {
    let last
    let length = queue.length
    for(let i = 0; i < length; i++) {
      const [x, y] = queue.shift()
      const cur = matrix[y][x]
      if (last === undefined || last === cur) {
        last = cur

        const right = x + 1 > row ? null : [x + 1, y]
        if (right !== null && !contain(queue, right)) {
          queue.push(right)
        }

        const top = y - 1 < 0 ? null : [x, y - 1]
        if (top !== null && !contain(queue, top)) {
          queue.push(top)
        }

      } else if (last !== cur) {
        return false
      }
    }
  }

  return true

}

// const matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
const matrix = [[1,2],[2,2]]
console.log(isToeplitzMatrix(matrix))