const { swap } = require("../../utils")

class IndexHeap {
  static fromArray(arr, sort = true) {
    const heap = new IndexHeap(sort)
    heap._heapify(arr)

    return heap
  }

  constructor(sort = true) {
    this.data = []
    this.indexes = []

    if (typeof sort === 'boolean') {
      if (sort) {
        this.sort = (e, v) => e > v
      } else {
        this.sort = (e, v) => e < v
      }
    } else {
      this.sort = sort
    }
  }

  size() {
    return this.indexes.length
  }

  _heapify(data) {
    // this.data = data

    data.forEach(e => {
      this.add(e)
    })
  }

  print() {
    console.log(this)
    
    let str = ''
    this.indexes.forEach(i => {
      str += this.data[i] + ', '
    })

    console.log(str)
  }

  getLastNotLeafChild() {
    return Math.floor((this.size() - 2) / 2)
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }

  getLeftChildIndex(i) {
    const index = 2 * i + 1
    if (index > this.size() - 1) {
      return -1
    }

    return index
  }

  getRightChildIndex(i) {
    const index = 2 * i + 2
    if (index > this.size() - 1) {
      return -1
    }

    return index
  }

  add(e) {
    const position = this.indexes.length
    this.data.push(e)
    // this.indexes.push(position)
    this.indexes[position] = position

    this._shiftUp(position)
  }

  _shiftUp(position) {

    let parentIndex = -1
    while((parentIndex = this.getParentIndex(position)) >= 0) {
      const e = this.data[this.indexes[position]]
      const parentE = this.data[this.indexes[parentIndex]]
      if (this.sort(e, parentE)) {
        swap(this.indexes, position, parentIndex)
      }

      position = parentIndex
    }
  }

  extractAll() {
    const res = []

    let e
    while((e = this.extract()) !== undefined) {
      res.push(e)
    }

    return res
  }

  extract() {
    if (this.size() === 0) {
      return
    }

    const topIndex = this.indexes[0]
    const e = this.data[topIndex]
    // this.data.splice(topIndex, 1)
    swap(this.indexes, 0, this.indexes.length - 1)
    this.indexes.length--

    this._shiftDown(0)

    return e
  }

  _shiftDown(position) {
    let leftChildIndex = -1
    let rightChildIndex = -1

    while((leftChildIndex = this.getLeftChildIndex(position)) > 0) {
      rightChildIndex = this.getRightChildIndex(position)
      const e = this.data[this.indexes[position]]

      if (rightChildIndex > 0) {
        const leftE = this.data[this.indexes[leftChildIndex]]
        const rightE = this.data[this.indexes[rightChildIndex]]
        if (this.sort(leftE, rightE) && this.sort(leftE, e)) {
          swap(this.indexes, leftChildIndex, position)
          position = leftChildIndex
        } else if (this.sort(rightE, leftE) && this.sort(rightE, e)) {
          swap(this.indexes, rightChildIndex, position)
          position = rightChildIndex
        } else {
          break
        }
      } else {
        const leftE = this.data[this.indexes[leftChildIndex]]
        if (this.sort(leftE, e)) {
          swap(this.indexes, leftChildIndex, position)
          position = leftChildIndex
        } else {
          break
        }
      }
    }

  }
}

module.exports = {
  IndexHeap,
}

// function test() {
//   const arr = [8, 6, 2, 3, 1, 5, 7, 4]
//   const heap = IndexHeap.fromArray(arr, true)
//   heap.print()
//   const res = heap.extractAll()
//   console.log(res)
// }

// test()