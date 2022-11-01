function _fill(image, r, c, originValue, color) {
  if (r < 0 || r > image.length - 1) {
    return
  }

  const arr = image[r]
  if (c < 0 || c > arr.length - 1) {
    return
  }

  if (image[r][c] === originValue) {
    image[r][c] = color
    _fill(image, r + 1, c, originValue, color) // up
    _fill(image, r, c + 1, originValue, color) // right
    _fill(image, r - 1, c, originValue, color) // down
    _fill(image, r, c - 1, originValue, color) // left
  }
}

var floodFill = function(image, sr, sc, color) {
  const originValue = image[sr][sc]
  if (originValue !== color) {
    _fill(image, sr, sc, originValue, color) 
  }
  return image
}

const image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 0
console.log(floodFill(image, sr, sc, newColor))