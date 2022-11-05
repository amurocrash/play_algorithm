function calTriangleArea(points, i, j, k) {
  const [x1, y1] = points[i]
  const [x2, y2] = points[j]
  const [x3, y3] = points[k]

  return 0.5 * Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x2 * y1 - x3 * y2 - x1 * y3) // 1-2 2-3 3-1
}

var largestTriangleArea = function(points) {
  const N = points.length
  let maxArea = 0
  for(let i = 0; i < N; i++) {
    for(let j = i + 1; j < N; j++) {
      for(let k = j + 1; k < N; k++) {
        const area = calTriangleArea(points, i, j, k)
        if (area > maxArea) {
          maxArea = area
        }
      }
    }
  }

  return maxArea
}

const points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
console.log(largestTriangleArea(points))