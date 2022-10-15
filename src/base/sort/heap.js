const { swap } = require("../../utils")

/**
 * 索引从1开始
 */
class Heap {
  constructor(data = [], max = true) {
    this.max = max // max为最大堆，否则为最小堆
    this.count = 0

    // this._init(data)
    this._heapify(data)
  }

  _init(data) {
    this.data = [undefined]

    if (data.length > 0) {
      data.forEach(e => {
        this.add(e)
      })
    }
  }

  _heapify(data) {
    this.data = [undefined, ...data]
    this.count = data.length
    // 最后一个非叶子节点的节点索引 Math.floor(this.count / 2)，然后从这个节点开始向前shiftdown
    for (let i = Math.floor(this.count / 2); i >= 1; i--) {
      this._shiftDown(i)
    }
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  parentIndex(i) {
    return Math.floor(i / 2)
  }

  leftChildIndex(i) {
    return 2 * i
  }

  rightChildIndex(i) {
    return 2 * i + 1
  }

  add(e) {
    this._shiftUp(e)
  }

  extact() {
    if (this.count === 0) {
      return
    }

    const e = this.data[1]
    swap(this.data, 1, this.count)
    this.count--
    if (this.count > 1) {
      this._shiftDown()
    }
    return e
  }

  extractAll() {
    const result = []

    let e
    while((e = this.extact()) !== undefined) {
      result.push(e)
    }

    return result
  }

  _shiftUp(e) {
    let position = ++this.count
    this.data[position] = e

    while(position > 1) {
      const parentIndex = this.parentIndex(position)
      if ((this.max && e > this.data[parentIndex]) || (!this.max && e < this.data[parentIndex])) {
        swap(this.data, position, parentIndex)
        position = parentIndex
      } else {
        break
      }
    }
  }

  _shiftDown(p = 1) {
    let position = p
    while (position < this.count) {
      const leftChildIndex = this.leftChildIndex(position)
      const rightChildIndex = this.rightChildIndex(position)

      let leftE
      let rightE
      let swapIndex = 0
      if (leftChildIndex <= this.count) {
        leftE = this.data[leftChildIndex]
      }
      if (rightChildIndex <= this.count) {
        rightE = this.data[rightChildIndex]
      }

      if (leftE === undefined && rightE === undefined) {
        break
      } else if (leftE !== undefined && rightE === undefined) {
        swapIndex = leftChildIndex
      } else if (leftE !==undefined && rightE !== undefined) {
        if ((this.max && leftE >= rightE) || (!this.max && leftE <= rightE)) {
          swapIndex = leftChildIndex
        } else {
          swapIndex = rightChildIndex
        }
      } 
      
      const e = this.data[position]
      const v = this.data[swapIndex]
      if (v !== undefined && (this.max && v > e) || (!this.max && v < e)) {
        swap(this.data, position, swapIndex)
        position = swapIndex
      } else {
        break
      }
    }
  }

  print(space = ' ') {
    const maxHeight = Math.ceil(Math.log2(this.count + 1))

    // const space = ' '
    const makeHeadSpaces = (height, maxHeight) => {
      // f(x) = 2 * f(x) + 1, 当x = 0时， f(x) = 0
      const calCount = (n) => {
        if (n === 0) {
          return 0
        }

        return 2 * calCount(n - 1) + 1
      }

      const count = calCount(maxHeight - height)
      let spaces = ''
      for (let j = 0; j < count; j++) {
        spaces += space
      }
      return spaces
    }

    const makeMidSpaces = (height, maxHeight) => {
      const calCount = (n) => {
        if (n === 0) {
          return 1
        }

        return 2 * calCount(n - 1) + 1
      }

      const count = calCount(maxHeight - height)
      let spaces = ''
      for (let i = 0; i < count; i++) {
        spaces += space
      }

      return spaces
    }

    let lastHeight = -1
    let str = ''
    let midSpaces = ''
    for (let i = 1; i <= this.count; i++) {
      const height = Math.ceil(Math.log2(i + 1))
      if (height !== lastHeight) {
        if (str) {
          console.log(str)
          str = ''
          midSpaces = ''
        }

        str += makeHeadSpaces(height, maxHeight)

        midSpaces += makeMidSpaces(height, maxHeight)
        str = str + this.data[i] + midSpaces
        lastHeight = height
      } else {
        str = str + this.data[i] + midSpaces
      }
    }

    if(str) {
      console.log(str)
    }
  }
}

const heapSort = (arr, asc = true) => {
  const heap = new Heap(arr, !asc)
  return heap.extractAll()
}

module.exports = {
  Heap,
  heapSort,
}

