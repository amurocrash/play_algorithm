function findAround(grid, i, j) {
  const up = grid[i - 1] === undefined ? 0 : (grid[i - 1][j] || 0) // i - 1, j
  const down = grid[i + 1] === undefined ? 0 : (grid[i + 1][j] || 0) // i + 1, j
  const left = grid[i][j - 1] || 0 // i, j - 1
  const right = grid[i][j + 1] || 0 // i, j + 1
  return  4 - (up + down + left + right)
}

// 与四个陆地相连的，周长为0（不计算），与三个相连的的为4 - 3 = 1，以此类推，与一个相连的为4 - 1 = 3，孤岛为4
var islandPerimeter = function(grid) {
  let count = 0
  for(let i = 0; i < grid.length; i++) {
    const row = grid[i]

    for (let j = 0; j < row.length; j++) {
      const cur = row[j]
      if (cur === 1) {
        count += findAround(grid, i, j)
      }
    }
  }

  return count
}