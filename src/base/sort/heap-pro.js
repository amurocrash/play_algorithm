const { swap } = require("../../utils")

class Heap {
  static fromArr(arr, sort = true) {
    const heap = new Heap(sort)
    heap._heapify(arr)
    return heap
  }

  constructor(sort = true) {
    this.data = []
    this.count = 0
    
    if (typeof sort === 'boolean') {
      if (sort) {
        this.sort = (e, v) => e > v
      } else {
        this.sort = (e, v) => e < v
      }
    } else {
      this.sort = sort
    }

    // this.init(data)
    // this._heapify(data)
  }

  // init(data) {
  //   data.forEach(e => {
  //     this.add(e)
  //   })
  // }

  _heapify(data) {
    this.data = data
    let i = this.getLastNotLeafIndex()
    while(i >= 0) {
      this._shiftDown(i)
      i--
    }
  }

  size() {
    return this.data.length
  }

  getLastNotLeafIndex() {
    return Math.floor(this.size() - 2) / 2
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }

  getLeftChildIndex(i) {
    let index = 2 * i + 1
    if (index > this.data.length - 1) {
      return -1
    }

    return index
  }

  getRightChildIndex(i) {
    let index = 2 * i + 2
    if (index > this.data.length - 1) {
      index = -1
    }

    return index
  }

  add(e) {
    this._shiftUp(e)
  }

  _shiftUp(e) {
    let position = this.data.length
    this.data[position] = e

    let parentIndex = -1
    while((parentIndex = this.getParentIndex(position)) >= 0) {
      const v = this.data[parentIndex]
      if (this.sort(e, v)) {
        swap(this.data, position, parentIndex)
        position = parentIndex
      } else {
        break
      }
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

    const e = this.data[0]
    swap(this.data, 0, this.data.length - 1)
    this.data.length--
    this._shiftDown(0)

    return e
  }

  _shiftDown(position) {
    let leftChildIndex = -1

    while((leftChildIndex = this.getLeftChildIndex(position)) >= 0) {
      const e = this.data[position]
      const rightChildIndex = this.getRightChildIndex(position)

      if (leftChildIndex >= 0 && rightChildIndex >= 0) {
        const leftE = this.data[leftChildIndex]
        const rightE = this.data[rightChildIndex]

        if (this.sort(leftE, rightE)) {
          if (this.sort(leftE, e)) {
            swap(this.data, position, leftChildIndex)
            position = leftChildIndex
          } else {
            break
          }
        } else {
          if (this.sort(rightE, e)) {
            swap(this.data, position, rightChildIndex)
            position = rightChildIndex
          } else {
            break
          }
        }
      } else if (leftChildIndex >= 0 && rightChildIndex < 0) {
        const leftE = this.data[leftChildIndex]
        if (this.sort(leftE, e)) {
          swap(this.data, position, leftChildIndex)
          position = leftChildIndex
        } else {
          break
        }
      } else {
        break
      }
    }
  }
}

module.exports = {
  Heap
}

function test() {
  // const arr = [8, 6, 2, 3, 1, 5, 7, 4]
  // const heap = Heap.fromArr(arr, false)
  // console.log(heap)
  // console.log(heap.extractAll())
  // console.log(heap)

  const arr = [{ num: 8, name: 'a8' }, { num: 6, name: 'a6' }, { num: 2, name: 'a2' }, 
    { num: 3, name: 'a3' }, { num: 1, name: 'a1' }, { num: 5, name: 'a5' }, { num: 7, name: 'a7' }, { num: 4, name: 'a4' }]
  const heap = Heap.fromArr(arr, (v, e) => v.num < e.num)
  console.log(heap)
  console.log(heap.extractAll())
  console.log(heap)
}

test()