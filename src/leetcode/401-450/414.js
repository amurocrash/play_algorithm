// 最大堆解法
// class Heap {
//   constructor() {
//     this.data = []
//   }

//   size() {
//     return this.data.length
//   }

//   getParentIndex(i) {
//     return Math.floor((i - 1) / 2)
//   }

//   getLeftChildIndex(i) {
//     const index = i * 2 + 1
//     if (index >= this.size()) {
//       return -1
//     }

//     return index
//   }

//   getRightChildIndex(i) {
//     const index = i * 2 + 2
//     if (index >= this.size()) {
//       return -1
//     }

//     return index
//   }

//   swap(i, j) {
//     const temp = this.data[i]
//     this.data[i] = this.data[j]
//     this.data[j] = temp
//   }

//   contains(e) {
//     return this.data.includes(e)
//   }

//   add(e) {
//     if (this.contains(e)) {
//       return
//     }

//     this.data.push(e)
//     this.shiftUp(this.size() - 1)
//   }

//   shiftUp(position) {
//     while(true) {
//       const parentIndex = this.getParentIndex(position)
//       if (parentIndex < 0) {
//         break
//       }

//       const e = this.data[position]
//       const parent = this.data[parentIndex]
//       if (parent < e) {
//         this.swap(position, parentIndex)
//         position = parentIndex
//       } else {
//         break
//       }
//     }
//   }

//   extract() {
//     if (this.size() === 0) {
//       return
//     }

//     const e = this.data[0]
//     this.data[0] = this.data[this.size() - 1]
//     this.data.length--
//     this.shiftDown(0)

//     return e
//   }

//   shiftDown(p) {
//     const findIndex = (leftChildIndex, rightChildIndex) => {
//       if (rightChildIndex < 0) {
//         return leftChildIndex
//       }
  
//       const left = this.data[leftChildIndex]
//       const right = this.data[rightChildIndex]
//       if (left >= right) {
//         return leftChildIndex
//       } else {
//         return rightChildIndex
//       }
//     }

//     while(true) {
//       const cur = this.data[p]

//       const leftChildIndex = this.getLeftChildIndex(p)
//       const rightChildIndex = this.getRightChildIndex(p)

//       if (leftChildIndex > 0 || rightChildIndex > 0) {
//         const index = findIndex(leftChildIndex, rightChildIndex)
//         if (cur >= this.data[index]) {
//           break
//         } else {
//           this.swap(index, p)
//           p = index
//         }
//       } else {
//         break
//       }
//     }
//   }

// }

// var thirdMax = function(nums) {
//   const heap = new Heap()
//   nums.forEach(e => {
//     heap.add(e)
//   })

//   const N = 3
//   let n = 1
//   let max
//   while(n <= N) {
//     const e = heap.extract()
//     if (n === 1) {
//       max = e
//     }

//     if (e === undefined) {
//       return max
//     }

//     if (n == N) {
//       return e
//     }

//     n++
//   }
// }

// const nums = [8, 6, 2, 3, 1, 5, 7, 4]
// console.log(thirdMax(nums))


// 用set
// function switchMin(set, e) {
//   if (set.has(e)) {
//     return
//   }

//   let min 
//   for (const _e of set) {
//     if (min === undefined || _e < min) {
//       min = _e
//     }
//   }

//   if (e > min) {
//     set.delete(min)
//     set.add(e)
//   }
// }

// function getRes(set) {
//   let max
//   let min
//   for(const e of set) {
//     if (max === undefined && min === undefined) {
//       max = e
//       min = e
//     } else if (e > max) {
//       max = e
//     } else if (e < min) {
//       min = e
//     }
//   }

//   return set.size === 3 ? min : max
// }

// var thirdMax = function(nums) {
//   const set = new Set()
//   nums.forEach(e => {
//     if (set.size === 3) {
//       switchMin(set, e)
//     } else {
//       set.add(e)
//     }
//   })

//   return getRes(set)
// }

// const nums = [1, 2, 2, 5, 3, 5]
// console.log(thirdMax(nums))


// 三变量
var thirdMax = function(nums) {
  let f1, f2, f3
  nums.forEach(e => {
    if (f1 === undefined || e > f1) {
      f3 = f2
      f2 = f1
      f1 = e
    } else if (f1 > e && (f2 === undefined || e > f2)) {
      f3 = f2
      f2 = e
    } else if (f2 > e && (f3 === undefined || e > f3)) {
      f3 = e
    }
  })

  return f3 === undefined ? f1 : f3
}

const nums = [1, 2, 2, 5, 3, 5]
console.log(thirdMax(nums))
