class Heap {
  constructor(sort = (a, b) => a < b ) {
    this.data = []
    this.sort = sort
  }

  size() {
    return this.data.length
  }

  getParentIndex(i) {
    if (i === 0) {
      return -1
    }

    return Math.floor((i - 1) / 2)
  }

  getLeftChildIndex(i) {
    const index = i * 2 + 1
    if (index >= this.size()) {
      return -1
    }

    return index
  }

  getRightChildIndex(i) {
    const index = i * 2 + 2
    if (index >= this.size()) {
      return -1
    }

    return index
  }

  swap(x, y) {
    if (x === y) {
      return
    }

    const temp = this.data[x]
    this.data[x] = this.data[y]
    this.data[y] = temp
  }

  peek() {
    return this.data[0]
  }

  add(e) {
    this.data.push(e)
    this.shiftUp(this.size() - 1)
  }

  shiftUp(pos) {
    while(pos > 0) {
      const parentIndex = this.getParentIndex(pos)
      const cur = this.data[pos]
      const par = this.data[parentIndex]
      if (this.sort(cur, par)) {
        this.swap(pos, parentIndex)
      } else {
        break
      }

      pos = parentIndex
    }
  }

  extract() {
    if (this.size() === 0) {
      return
    }

    const e = this.data[0]
    this.swap(0, this.size() - 1)
    this.data.length = this.data.length - 1
    if (this.size() > 0) {
      this.shiftDown(0)
    }
    return e
  }

  shiftDown(pos) {
    while(pos >= 0) {
      const leftIndex = this.getLeftChildIndex(pos)
      const rightIndex = this.getRightChildIndex(pos)
      
      if (leftIndex < 0 && rightIndex < 0) {
        break
      } else {
        const left = leftIndex < 0 ? undefined : this.data[leftIndex]
        const right = rightIndex < 0 ? undefined : this.data[rightIndex]
        const e = this.data[pos]

        if (right === undefined || this.sort(left, right)) {
          if (this.sort(left, e)) {
            this.swap(leftIndex, pos)
            pos = leftIndex
          } else {
            break
          }
        } else if (left === undefined || !this.sort(left, right)) {
          if (this.sort(right, e)) {
            this.swap(rightIndex, pos)
            pos = rightIndex
          } else {
            break
          }
        }
      }
    }
  }
}

var KthLargest = function(k, nums) {
  this.heap = new Heap()
  this.k = k
  nums.forEach(n => {
    this.add(n)
  })
}

KthLargest.prototype.add = function(val) {
  this.heap.add(val)
  
  if (this.heap.size() > this.k) {
    this.heap.extract()
  }

  return this.heap.peek()
}

// const nums = [4, 5, 8, 2], k = 3
// const kl = new KthLargest(k, nums)
// console.log(kl.heap.data)
// console.log(kl.add(3))
// console.log(kl.add(5))
// console.log(kl.add(10))
// console.log(kl.add(9))
// console.log(kl.add(4))

// ["KthLargest","add","add","add","add","add"]
// [[2,[0]],[-1],[1],[-2],[-4],[3]]
// const nums = [0], k = 2
// const kl = new KthLargest(k, nums)
// console.log(kl.heap.data)
// console.log(kl.add(-1))
// console.log(kl.heap.data)
// console.log(kl.add(1))
// console.log(kl.heap.data)
// console.log(kl.add(-2))
// console.log(kl.heap.data)
// console.log(kl.add(-4))
// console.log(kl.heap.data)
// console.log(kl.add(3))
// console.log(kl.heap.data)


// ["KthLargest","add","add","add","add","add","add","add","add"]
// [[3,[1,1]],[1],[1],[3],[3],[3],[4],[4],[4]]
const nums = [1, 1], k = 3
const kl = new KthLargest(k, nums)
console.log(kl.heap.data)
console.log(kl.add(1))
console.log(kl.heap.data)
console.log(kl.add(1))
console.log(kl.heap.data)
console.log(kl.add(3))
console.log(kl.heap.data)
console.log(kl.add(3))
console.log(kl.heap.data)
console.log(kl.add(3))
console.log(kl.heap.data)
console.log(kl.add(4))
console.log(kl.heap.data)
console.log(kl.add(4))
console.log(kl.heap.data)
console.log(kl.add(4))
console.log(kl.heap.data)